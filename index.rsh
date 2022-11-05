'reach 0.1';

const [ isFingers, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ isGuess, ZEROG, ONEG, TWOG, THREEG, FOURG, FIVEG, SIXG, SEVENG, EIGHTG, NINEG, TENG ] = makeEnum(11);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);


// game logic
const winner = (fingersAlice, fingersBob, guessAlice, guessBob) => {
 if ( guessAlice == guessBob )
  {
   //const myoutcome = DRAW; //tie
   return DRAW;
} else {
 if ( ((fingersAlice + fingersBob) == guessAlice ) ) {
   return A_WINS;// player A wins
 }
   else {
     if ( (fingersAlice + fingersBob) == guessBob) {
       return B_WINS;// player B wins
   }
     else {
       return DRAW;
     }

   }
 }
}


assert(winner(ZERO,TWO,ZEROG,TWOG)== B_WINS);
assert(winner(TWO,ZERO,TWOG,ZEROG)== A_WINS);
assert(winner(ZERO,ONE,ZEROG,TWOG)== DRAW);
assert(winner(ONE,ONE,ONEG,ONEG)== DRAW);


// assert(winner(ONEG, SIXG, ZERO, ONE) == A_WINS);
// assert(winner(SIXG, EIGHTG, FIVE, THREE) == B_WINS);
// assert(winner(FOURG, TENG, ZERO, ZERO) == DRAW);
// assert(winner(FIVEG, FIVEG, THREE, ZERO) == DRAW); 

forall(UInt, fingersAlice =>
    forall(UInt, fingersBob =>
      forall(UInt, guessAlice =>
        forall(UInt, guessBob =>
      assert(isOutcome(winner(fingersAlice, fingersBob, guessAlice, guessBob)))))));
      
forall(UInt, (fingersAlice) =>
  forall(UInt, (fingerBob) =>      
    forall(UInt, (guess) =>
    assert(winner(fingersAlice, fingerBob, guess, guess) == DRAW))));  


const Player =
     { ...hasRandom,
       getFingers: Fun([], UInt),
       getGuess: Fun([], UInt),
       seeWinning: Fun([UInt, UInt], Null),
       seeOutcome: Fun([UInt], Null),
       informTimeout: Fun([], Null),
      };


export const main = Reach.App( () => {
    const Alice = Participant('Alice', {
            // Alice's code: interact interface here
            //Let Alice use the Player (Player is function)
            ...Player,
            wager: UInt,
            ...hasConsoleLogger,
            deadline: UInt,

        });
    const Bob = Participant("Bob", {
            // Bob's code: interact interface here
            //Let Alice use the Player (Player is function)
            ...Player,
            acceptWager: Fun([UInt],Null),
        });
    init()
    
    const informTimeOut = () => {
            each([Alice,Bob], () =>{
                interact.informTimeout();
            })
        };

       
        //Write program here
        Alice.only(() => {
            const wager = declassify(interact.wager);
            const deadline = declassify( interact.deadline);

        });

        //Alice publish then pay
        Alice.publish(deadline, wager).pay(wager);
        // Alice.publish(commitAlice, amount, deadline).pay(amount)
        commit();
    
        // unknowable(Bob,Alice(_handAlice, _saltAlice))
    
        Bob.only(() => {
            interact.acceptWager(wager);

        });
        // Bob.publish(handBob).pay(amount).timeout(relativeTime(deadline),() => closeTo(Alice,informTimeOut))
    
        Bob.pay(wager)
        .timeout(relativeTime(deadline),() => closeTo(Alice,informTimeOut));
        


        var outcome = DRAW

        invariant(balance() == 2 * wager && isOutcome(outcome))
        while(outcome == DRAW){
    
            commit();
    
            Alice.only(() => {
                
                const _fingersAlice = interact.getFingers();
                const _guessAlice = interact.getGuess();

                const [_commitAlice, _saltAlice] = makeCommitment(interact, _fingersAlice);
                const commitAlice = declassify(_commitAlice);
                const [_guessCommitAlice, _guessSaltAlice] = makeCommitment(interact, _guessAlice);
                const guessCommitAlice = declassify(_guessCommitAlice);
    
            });


            Alice.publish(commitAlice, guessCommitAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeOut));
            
            commit();
             
            // Alice.publish(guessCommitAlice)
            // .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeOut));
            // commit();


            unknowable(Bob,Alice(_fingersAlice, _saltAlice))
            unknowable(Bob, Alice(_guessAlice, _guessSaltAlice))
    

            Bob.only(() => {
                const _fingersBob = interact.getFingers();
                const _guessBob = interact.getGuess();
                const fingersBob = declassify(_fingersBob);
                const guessBob = declassify(_guessBob);
            });

            Bob.publish(fingersBob, guessBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeOut));
            commit()
    
            // Bob.publish(guessBob)
            // .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeOut));
            // commit()
            
            Alice.only(()=>{
                //const [saltAlice, fingersAlice] = declassify([_saltAlice, _fingersAlice]);
                //const [guessSaltAlice, guessAlice] = declassify([_guessSaltAlice, _guessAlice]);

                const saltAlice = declassify(_saltAlice);
                const fingersAlice = declassify(_fingersAlice);
                const guessSaltAlice = declassify(_guessSaltAlice);
                const guessAlice = declassify(_guessAlice);
            });

            Alice.publish(saltAlice, fingersAlice, guessSaltAlice, guessAlice);
            checkCommitment(commitAlice, saltAlice,fingersAlice);
            checkCommitment(guessCommitAlice, guessSaltAlice, guessAlice);



            each([Alice, Bob],() =>{
                //const WinningNumber = fingersAlice + fingersBob;
                interact.seeWinning(fingersAlice, fingersBob);
            });

            
            outcome = winner(fingersAlice,fingersBob, guessAlice, guessBob);
            continue;

        }

        assert(outcome == A_WINS || outcome == B_WINS);
        transfer(2* wager).to(outcome == A_WINS ? Alice : Bob);
        commit();
    
        each([Alice, Bob],() => {

            interact.seeOutcome(outcome)
        });
        
    
    });