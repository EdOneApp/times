import test from 'node:test';import assert from 'node:assert/strict';import {calculateDay,formatDuration} from '../src/lib/time.ts';
const base={arrival:'08:00',departure:'17:00',expectedStart:'08:00',expectedEnd:'17:00',pause:60,margin:10};
test('subtracts pause and returns exact eight-hour day',()=>{const d=calculateDay(base);assert.equal(d.effective,480);assert.equal(d.extra,0);assert.equal(formatDuration(d.effective),'8 h 00')});
test('margin affects flag but never removes minutes',()=>{const d=calculateDay({...base,arrival:'08:10'});assert.equal(d.late,10);assert.equal(d.effective,470);assert.equal(d.lateFlag,false);assert.equal(calculateDay({...base,arrival:'08:11'}).lateFlag,true)});
test('distinguishes early departure and excess duration',()=>{assert.equal(calculateDay({...base,departure:'16:30'}).early,30);assert.equal(calculateDay({...base,departure:'18:00'}).extra,60)});
test('rejects unsupported overnight interval and excessive pause',()=>{assert.throws(()=>calculateDay({...base,arrival:'22:00',departure:'06:00'}));assert.throws(()=>calculateDay({...base,pause:600}));assert.throws(()=>calculateDay({...base,arrival:'25:00'}))});
