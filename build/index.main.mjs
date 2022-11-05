// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v314 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v315 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v314, v315],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:97:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v315, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v319, v320], secs: v322, time: v321, didSend: v73, from: v318 } = txn1;
      
      sim_r.txns.push({
        amt: v320,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v331 = stdlib.safeAdd(v321, v319);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v319, v320], secs: v322, time: v321, didSend: v73, from: v318 } = txn1;
  ;
  const v331 = stdlib.safeAdd(v321, v319);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v331],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v318, v319, v320, v331],
      evt_cnt: 0,
      funcNum: 2,
      lct: v321,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v477, time: v476, didSend: v257, from: v475 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v318,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v477, time: v476, didSend: v257, from: v475 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:84:39:application',
      fs: ['at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:110:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v337, time: v336, didSend: v82, from: v335 } = txn2;
    const v339 = stdlib.add(v320, v320);
    ;
    let v340 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v341 = v336;
    let v348 = v339;
    
    let txn3 = txn2;
    while (await (async () => {
      const v356 = stdlib.eq(v340, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v356;})()) {
      const v363 = stdlib.safeAdd(v341, v319);
      const v367 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:123:58:application',
        fs: ['at ./index.rsh:121:23:application call to [unknown function] (defined at: ./index.rsh:121:27:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v368 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:124:54:application',
        fs: ['at ./index.rsh:121:23:application call to [unknown function] (defined at: ./index.rsh:121:27:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v369 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:126:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:121:23:application call to [unknown function] (defined at: ./index.rsh:121:27:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v370 = stdlib.digest([ctc0, ctc0], [v369, v367]);
      const v372 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:128:76:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:121:23:application call to [unknown function] (defined at: ./index.rsh:121:27:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v373 = stdlib.digest([ctc0, ctc0], [v372, v368]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v318, v319, v320, v335, v348, v363, v370, v373],
        evt_cnt: 2,
        funcNum: 4,
        lct: v341,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:134:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v376, v377], secs: v379, time: v378, didSend: v114, from: v375 } = txn4;
          
          ;
          const v387 = stdlib.safeAdd(v378, v319);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v363],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v318, v319, v320, v335, v348, v363],
          evt_cnt: 0,
          funcNum: 5,
          lct: v341,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v443, time: v442, didSend: v210, from: v441 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v443, time: v442, didSend: v210, from: v441 } = txn5;
        ;
        const v444 = stdlib.addressEq(v318, v441);
        const v445 = stdlib.addressEq(v335, v441);
        const v446 = v444 ? true : v445;
        stdlib.assert(v446, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:135:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:84:39:application',
          fs: ['at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:135:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v376, v377], secs: v379, time: v378, didSend: v114, from: v375 } = txn4;
        ;
        const v380 = stdlib.addressEq(v318, v375);
        stdlib.assert(v380, {
          at: './index.rsh:134:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v387 = stdlib.safeAdd(v378, v319);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v387],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v318, v319, v320, v335, v348, v376, v377, v387],
            evt_cnt: 0,
            funcNum: 7,
            lct: v378,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v425, time: v424, didSend: v176, from: v423 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v318,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v425, time: v424, didSend: v176, from: v423 } = txn6;
          ;
          const v426 = stdlib.addressEq(v318, v423);
          const v427 = stdlib.addressEq(v335, v423);
          const v428 = v426 ? true : v427;
          stdlib.assert(v428, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:84:39:application',
            fs: ['at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v394, v395], secs: v397, time: v396, didSend: v126, from: v393 } = txn5;
          ;
          const v398 = stdlib.addressEq(v335, v393);
          stdlib.assert(v398, {
            at: './index.rsh:155:17:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v318, v319, v320, v335, v348, v376, v377, v394, v395, v369, v367, v372, v368],
            evt_cnt: 4,
            funcNum: 8,
            lct: v396,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:173:19:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v402, v403, v404, v405], secs: v407, time: v406, didSend: v138, from: v401 } = txn6;
              
              ;
              
              let v417;
              const v418 = stdlib.eq(v405, v395);
              if (v418) {
                v417 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v419 = stdlib.safeAdd(v403, v394);
                const v420 = stdlib.eq(v419, v405);
                const v422 = stdlib.eq(v419, v395);
                const v492 = v422 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v493 = v420 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v492;
                v417 = v493;
                }
              const cv340 = v417;
              const cv341 = v406;
              const cv348 = v348;
              
              await (async () => {
                const v340 = cv340;
                const v341 = cv341;
                const v348 = cv348;
                
                if (await (async () => {
                  const v356 = stdlib.eq(v340, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v356;})()) {
                  const v363 = stdlib.safeAdd(v341, v319);
                  sim_r.isHalt = false;
                  }
                else {
                  const v459 = stdlib.eq(v340, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v462 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:191:18:decimal', stdlib.UInt_max, '2'), v320);
                  const v464 = v459 ? v318 : v335;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v464,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v402, v403, v404, v405], secs: v407, time: v406, didSend: v138, from: v401 } = txn6;
          ;
          const v408 = stdlib.addressEq(v318, v401);
          stdlib.assert(v408, {
            at: './index.rsh:173:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v409 = stdlib.digest([ctc0, ctc0], [v402, v403]);
          const v410 = stdlib.digestEq(v376, v409);
          stdlib.assert(v410, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:174:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v411 = stdlib.digest([ctc0, ctc0], [v404, v405]);
          const v412 = stdlib.digestEq(v377, v411);
          stdlib.assert(v412, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:175:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          stdlib.protect(ctc2, await interact.seeWinning(v403, v394), {
            at: './index.rsh:181:36:application',
            fs: ['at ./index.rsh:179:17:application call to [unknown function] (defined at: ./index.rsh:179:34:function exp)'],
            msg: 'seeWinning',
            who: 'Alice'
            });
          
          let v417;
          const v418 = stdlib.eq(v405, v395);
          if (v418) {
            v417 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          else {
            const v419 = stdlib.safeAdd(v403, v394);
            const v420 = stdlib.eq(v419, v405);
            const v422 = stdlib.eq(v419, v395);
            const v492 = v422 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v493 = v420 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v492;
            v417 = v493;
            }
          const cv340 = v417;
          const cv341 = v406;
          const cv348 = v348;
          
          v340 = cv340;
          v341 = cv341;
          v348 = cv348;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    const v459 = stdlib.eq(v340, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v462 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:191:18:decimal', stdlib.UInt_max, '2'), v320);
    const v464 = v459 ? v318 : v335;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v340), {
      at: './index.rsh:196:32:application',
      fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:30:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v319, v320], secs: v322, time: v321, didSend: v73, from: v318 } = txn1;
  ;
  const v331 = stdlib.safeAdd(v321, v319);
  stdlib.protect(ctc1, await interact.acceptWager(v320), {
    at: './index.rsh:104:33:application',
    fs: ['at ./index.rsh:103:17:application call to [unknown function] (defined at: ./index.rsh:103:21:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v318, v319, v320, v331],
    evt_cnt: 0,
    funcNum: 1,
    lct: v321,
    onlyIf: true,
    out_tys: [],
    pay: [v320, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v337, time: v336, didSend: v82, from: v335 } = txn2;
      
      const v339 = stdlib.add(v320, v320);
      sim_r.txns.push({
        amt: v320,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v340 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v341 = v336;
      const v348 = v339;
      
      if (await (async () => {
        const v356 = stdlib.eq(v340, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v356;})()) {
        const v363 = stdlib.safeAdd(v341, v319);
        sim_r.isHalt = false;
        }
      else {
        const v459 = stdlib.eq(v340, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v462 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:191:18:decimal', stdlib.UInt_max, '2'), v320);
        const v464 = v459 ? v318 : v335;
        sim_r.txns.push({
          kind: 'from',
          to: v464,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v331],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v318, v319, v320, v331],
      evt_cnt: 0,
      funcNum: 2,
      lct: v321,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v477, time: v476, didSend: v257, from: v475 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v318,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v477, time: v476, didSend: v257, from: v475 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:84:39:application',
      fs: ['at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:110:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v337, time: v336, didSend: v82, from: v335 } = txn2;
    const v339 = stdlib.add(v320, v320);
    ;
    let v340 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v341 = v336;
    let v348 = v339;
    
    let txn3 = txn2;
    while (await (async () => {
      const v356 = stdlib.eq(v340, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v356;})()) {
      const v363 = stdlib.safeAdd(v341, v319);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v363],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v318, v319, v320, v335, v348, v363],
          evt_cnt: 0,
          funcNum: 5,
          lct: v341,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v443, time: v442, didSend: v210, from: v441 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v335,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v443, time: v442, didSend: v210, from: v441 } = txn5;
        ;
        const v444 = stdlib.addressEq(v318, v441);
        const v445 = stdlib.addressEq(v335, v441);
        const v446 = v444 ? true : v445;
        stdlib.assert(v446, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:135:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:84:39:application',
          fs: ['at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:135:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v376, v377], secs: v379, time: v378, didSend: v114, from: v375 } = txn4;
        ;
        const v380 = stdlib.addressEq(v318, v375);
        stdlib.assert(v380, {
          at: './index.rsh:134:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v387 = stdlib.safeAdd(v378, v319);
        const v391 = stdlib.protect(ctc0, await interact.getFingers(), {
          at: './index.rsh:149:56:application',
          fs: ['at ./index.rsh:148:21:application call to [unknown function] (defined at: ./index.rsh:148:25:function exp)'],
          msg: 'getFingers',
          who: 'Bob'
          });
        const v392 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:150:52:application',
          fs: ['at ./index.rsh:148:21:application call to [unknown function] (defined at: ./index.rsh:148:25:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v318, v319, v320, v335, v348, v376, v377, v387, v391, v392],
          evt_cnt: 2,
          funcNum: 6,
          lct: v378,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:155:17:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v394, v395], secs: v397, time: v396, didSend: v126, from: v393 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v387],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v318, v319, v320, v335, v348, v376, v377, v387],
            evt_cnt: 0,
            funcNum: 7,
            lct: v378,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v425, time: v424, didSend: v176, from: v423 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v318,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v425, time: v424, didSend: v176, from: v423 } = txn6;
          ;
          const v426 = stdlib.addressEq(v318, v423);
          const v427 = stdlib.addressEq(v335, v423);
          const v428 = v426 ? true : v427;
          stdlib.assert(v428, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:84:39:application',
            fs: ['at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v394, v395], secs: v397, time: v396, didSend: v126, from: v393 } = txn5;
          ;
          const v398 = stdlib.addressEq(v335, v393);
          stdlib.assert(v398, {
            at: './index.rsh:155:17:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v402, v403, v404, v405], secs: v407, time: v406, didSend: v138, from: v401 } = txn6;
          ;
          const v408 = stdlib.addressEq(v318, v401);
          stdlib.assert(v408, {
            at: './index.rsh:173:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v409 = stdlib.digest([ctc0, ctc0], [v402, v403]);
          const v410 = stdlib.digestEq(v376, v409);
          stdlib.assert(v410, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:174:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v411 = stdlib.digest([ctc0, ctc0], [v404, v405]);
          const v412 = stdlib.digestEq(v377, v411);
          stdlib.assert(v412, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:175:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          stdlib.protect(ctc1, await interact.seeWinning(v403, v394), {
            at: './index.rsh:181:36:application',
            fs: ['at ./index.rsh:179:17:application call to [unknown function] (defined at: ./index.rsh:179:34:function exp)'],
            msg: 'seeWinning',
            who: 'Bob'
            });
          
          let v417;
          const v418 = stdlib.eq(v405, v395);
          if (v418) {
            v417 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          else {
            const v419 = stdlib.safeAdd(v403, v394);
            const v420 = stdlib.eq(v419, v405);
            const v422 = stdlib.eq(v419, v395);
            const v492 = v422 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v493 = v420 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v492;
            v417 = v493;
            }
          const cv340 = v417;
          const cv341 = v406;
          const cv348 = v348;
          
          v340 = cv340;
          v341 = cv341;
          v348 = cv348;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    const v459 = stdlib.eq(v340, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v462 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:191:18:decimal', stdlib.UInt_max, '2'), v320);
    const v464 = v459 ? v318 : v335;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v340), {
      at: './index.rsh:196:32:application',
      fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:30:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByANAAEIBQIoUAcgmAEJWDAmAwEAAQEAIjUAMRhBBI4qZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAh1JIQcMQAEbSSQMQADBJBJEIQo0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/4GgAVs1/kk1BUlKIls1/SRbNfyBEFs1+4EYWzX6gAR/ojtSNP0WUDT8FlA0+xZQNPoWULA0/zEAEkQ0A1dYIDT9FjT8FlABEkQ0A1d4IDT7FjT6FlABEkQ0+jT+EkEABiM1+UIAHDT8NAMhCVsINfgjIjT4NP4STSEENPg0+hJNNfk0/zQDIQhbNAMhBVs0A1cwIDT5MgY0AyEGW0IC40ghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEJWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQZbsggjshA0/7IHs0IC8EmBBgxAAKRIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEIWzX+IQVbNf1XMCA1/CEGWzX7V1ggNfpXeCA1+Uk1BUkiWzX4JFs194AESiHL/DT4FlA09xZQsDIGNAMhCVsMRDT8MQASRDT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlAoSwFXAH9nKUsBV38pZ0ghCjUBMgY1AkICYEglNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBluyCCOyEDT/sgezQgH1SSEEDEAA4EmBBAxAAJhIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hCFs1/iEFWzX9VzAgNfwhBls1+0k1BUlXACA1+lcgIDX5gARgXaQrNPpQNPlQsDIGNAMhC1sMRDT/MQASRDIGNP4INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghBzUBMgY1AkIBaiEEEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQxbD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEOSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhDFsMRDT/iAFFNANXACA0AyEIWzT/MQAjMgY0/0kIQgBfSIGgjQaIASUiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP6IAPUyBjT/CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAHw1/zX+Nf01/DX7Nfo1+TT9IxJBAC40/jT6CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0glNQEyBjUCQgA5sSKyASEENPsLsggjshA0/DT5NP0hBBJNsgezQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v320",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v320",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v376",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v394",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v376",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v394",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001bf138038062001bf18339810160408190526200002691620002a4565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020808301510151620000a1903414600762000145565b602082015151620000b490439062000170565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013b9260029290910190620001c7565b5050505062000368565b816200016c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826200017f838262000304565b9150811015620001c15760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000163565b92915050565b828054620001d5906200032b565b90600052602060002090601f016020900481019282620001f9576000855562000244565b82601f106200021457805160ff191683800117855562000244565b8280016001018555821562000244579182015b828111156200024457825182559160200191906001019062000227565b506200025292915062000256565b5090565b5b8082111562000252576000815560010162000257565b604080519081016001600160401b03811182821017156200029e57634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002b857600080fd5b620002c26200026d565b835181526040601f1983011215620002d957600080fd5b620002e36200026d565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032657634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034057607f821691505b602082108114156200036257634e487b7160e01b600052602260045260246000fd5b50919050565b61187980620003786000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a578063ab53f2c61461011d578063bf2c5b2414610140578063cc923b2914610153578063ebdbfdcc1461016657005b80631e93b0f11461009857806321642639146100bc5780632c10a159146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046113f7565b610179565b6100966100dd36600461141a565b610427565b6100966100f036600461141a565b6105b3565b34801561010157600080fd5b506001546100a9565b61009661011836600461141a565b610731565b34801561012957600080fd5b506101326108cc565b6040516100b392919061142c565b61009661014e36600461141a565b610969565b610096610161366004611489565b610b00565b6100966101743660046113f7565b610dd4565b610189600760005414601c611070565b6101a38135158061019c57506001548235145b601d611070565b6000808055600280546101b59061149b565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061149b565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611524565b90506102598160e001514310601e611070565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f338360405161028a9291906115d0565b60405180910390a161029e3415601a611070565b60608101516102b9906001600160a01b03163314601b611070565b61031a60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c080850151908401528481013560e08401528482013561010084015260096000554360015590516103fd9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906104219291906112b0565b50505050565b6104376001600054146009611070565b6104518135158061044a57506001548235145b600a611070565b6000808055600280546104639061149b565b80601f016020809104026020016040519081016040528092919081815260200182805461048f9061149b565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b50505050508060200190518101906104f49190611601565b905061050781606001514310600b611070565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161053892919061167a565b60405180910390a1610551816040015134146008611070565b610559611334565b815181516001600160a01b03909116905260208083015182518201526040808401805184518301528351336060909101528284018051600190528051439401939093525191519180019101526105ae81611096565b505050565b6105c3600160005414600d611070565b6105dd813515806105d657506001548235145b600e611070565b6000808055600280546105ef9061149b565b80601f016020809104026020016040519081016040528092919081815260200182805461061b9061149b565b80156106685780601f1061063d57610100808354040283529160200191610668565b820191906000526020600020905b81548152906001019060200180831161064b57829003601f168201915b50505050508060200190518101906106809190611601565b90506106948160600151431015600f611070565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106c592919061167a565b60405180910390a16106d93415600c611070565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610716573d6000803e3d6000fd5b506000808055600181905561072d9060029061138d565b5050565b6107416005600054146017611070565b61075b8135158061075457506001548235145b6018611070565b60008080556002805461076d9061149b565b80601f01602080910402602001604051908101604052809291908181526020018280546107999061149b565b80156107e65780601f106107bb576101008083540402835291602001916107e6565b820191906000526020600020905b8154815290600101906020018083116107c957829003601f168201915b50505050508060200190518101906107fe91906116b7565b90506108128160a001514310156019611070565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161084392919061167a565b60405180910390a161085734156015611070565b805161088b906001600160a01b031633146108815760608201516001600160a01b03163314610884565b60015b6016611070565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610716573d6000803e3d6000fd5b6000606060005460028080546108e19061149b565b80601f016020809104026020016040519081016040528092919081815260200182805461090d9061149b565b801561095a5780601f1061092f5761010080835404028352916020019161095a565b820191906000526020600020905b81548152906001019060200180831161093d57829003601f168201915b50505050509050915091509091565b6109796007600054146021611070565b6109938135158061098c57506001548235145b6022611070565b6000808055600280546109a59061149b565b80601f01602080910402602001604051908101604052809291908181526020018280546109d19061149b565b8015610a1e5780601f106109f357610100808354040283529160200191610a1e565b820191906000526020600020905b815481529060010190602001808311610a0157829003601f168201915b5050505050806020019051810190610a369190611524565b9050610a4a8160e001514310156023611070565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a7b92919061167a565b60405180910390a1610a8f3415601f611070565b8051610ac3906001600160a01b03163314610ab95760608201516001600160a01b03163314610abc565b60015b6020611070565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610716573d6000803e3d6000fd5b610b106009600054146028611070565b610b2a81351580610b2357506001548235145b6029611070565b600080805560028054610b3c9061149b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b689061149b565b8015610bb55780601f10610b8a57610100808354040283529160200191610bb5565b820191906000526020600020905b815481529060010190602001808311610b9857829003601f168201915b5050505050806020019051810190610bcd919061174b565b9050610bec604051806040016040528060008152602001600081525090565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c5f34156024611070565b8151610c77906001600160a01b031633146025611070565b60408051610cc391610c9d91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146026611070565b604080516060858101356020830152608086013592820192909252610d0991016040516020818303038152906040528051906020012060001c8360c00151146027611070565b61010082015160808401351415610d235760018152610d6d565b610d3883602001602001358360e001516111fe565b60208201819052608084013514610d6757816101000151816020015114610d60576001610d6a565b6000610d6a565b60025b81525b610d75611334565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528351818401805191909152805143920191909152608085015190519091015261042181611096565b610de46005600054146012611070565b610dfe81351580610df757506001548235145b6013611070565b600080805560028054610e109061149b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3c9061149b565b8015610e895780601f10610e5e57610100808354040283529160200191610e89565b820191906000526020600020905b815481529060010190602001808311610e6c57829003601f168201915b5050505050806020019051810190610ea191906116b7565b9050610eb96040518060200160405280600081525090565b610eca8260a0015143106014611070565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610efb9291906115d0565b60405180910390a1610f0f34156010611070565b8151610f27906001600160a01b031633146011611070565b610f354383602001516111fe565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516110459183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906110699291906112b0565b5050505050565b8161072d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6040805160208101909152600081526020820151516001141561119b576110cd8260200151602001518360000151602001516111fe565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016103fd565b6020820151516002146111b3578151606001516111b7565b8151515b6001600160a01b03166108fc6111d66002856000015160400151611251565b6040518115909202916000818181858888f19350505050158015610716573d6000803e3d6000fd5b60008261120b83826117ea565b915081101561124b5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161108d565b92915050565b6000811580611275575082826112678183611802565b92506112739083611821565b145b61124b5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161108d565b8280546112bc9061149b565b90600052602060002090601f0160209004810192826112de5760008555611324565b82601f106112f757805160ff1916838001178555611324565b82800160010185558215611324579182015b82811115611324578251825591602001919060010190611309565b506113309291506113ca565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161138860405180606001604052806000815260200160008152602001600081525090565b905290565b5080546113999061149b565b6000825580601f106113a9575050565b601f0160209004906000526020600020908101906113c791906113ca565b50565b5b8082111561133057600081556001016113cb565b6000606082840312156113f157600080fd5b50919050565b60006060828403121561140957600080fd5b61141383836113df565b9392505050565b6000604082840312156113f157600080fd5b82815260006020604081840152835180604085015260005b8181101561146057858101830151858201606001528201611444565b81811115611472576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156113f157600080fd5b600181811c908216806114af57607f821691505b602082108114156113f157634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561150257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461151f57600080fd5b919050565b600061010080838503121561153857600080fd5b6040519081019067ffffffffffffffff8211818310171561156957634e487b7160e01b600052604160045260246000fd5b8160405261157684611508565b8152602084015160208201526040840151604082015261159860608501611508565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161141360208301848035825260208082013590830152604090810135910152565b60006080828403121561161357600080fd5b6040516080810181811067ffffffffffffffff8211171561164457634e487b7160e01b600052604160045260246000fd5b60405261165083611508565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146116a857600080fd5b80604085015250509392505050565b600060c082840312156116c957600080fd5b60405160c0810181811067ffffffffffffffff821117156116fa57634e487b7160e01b600052604160045260246000fd5b60405261170683611508565b8152602083015160208201526040830151604082015261172860608401611508565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610120828403121561175e57600080fd5b6117666114d0565b61176f83611508565b8152602083015160208201526040830151604082015261179160608401611508565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117fd576117fd6117d4565b500190565b600081600019048311821515161561181c5761181c6117d4565b500290565b60008261183e57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212201c2a9cb5191893bffa972793104242007bdde35a5109a92b73a731dea9aa0b3f64736f6c634300080c0033`,
  BytecodeLen: 7153,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:99:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:110:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:192:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:119:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:135:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:137:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:156:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:157:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
