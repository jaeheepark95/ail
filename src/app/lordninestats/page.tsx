"use client";

import React, { useState, ChangeEvent, useEffect } from "react";

interface Stats {
  curDamage: number;
  curSpeed: number;
  curCritical: number;
  curCriDamage: number;
  curAllDamage: number;
  curMonsterDamage: number;
}

export default function Home() {
  const [curStats, setCurStats] = useState<Stats>({
    curDamage: 0,
    curSpeed: 0,
    curCritical: 0,
    curCriDamage: 0,
    curAllDamage: 0,
    curMonsterDamage: 0,
  });
  const [plusStats, sePlusStats] = useState<Stats>({
    curDamage: 0,
    curSpeed: 0,
    curCritical: 0,
    curCriDamage: 0,
    curAllDamage: 0,
    curMonsterDamage: 0,
  });
  const [Damage, setDamage] = useState<number>(0);
  const [afDamage, setAfDamage] = useState<number>(0);
  const [percent, setPercent] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    let numericValue = parseFloat(value);

    // 상태 업데이트
    setCurStats((prevValues) => ({
      ...prevValues,
      [name]: numericValue,
    }));
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    let numericValue = parseFloat(value);

    // 상태 업데이트
    sePlusStats((prevValues) => ({
      ...prevValues,
      [name]: numericValue,
    }));
  };

  const damageTotal = () => {
    let totalCurDamage =
      curStats.curDamage *
      (1 + curStats.curSpeed / 100) *
      (1 + curStats.curAllDamage / 100) *
      (1 + curStats.curMonsterDamage / 100) *
      ((curStats.curCritical / 1000) * (1.2 + curStats.curCriDamage / 100) +
        (1 - curStats.curCritical / 1000));

    setDamage(totalCurDamage);
  };

  const afterDamage = () => {
    let totalCurDamage =
      (curStats.curDamage + plusStats.curDamage) *
      (1 + curStats.curSpeed / 100 + plusStats.curSpeed / 100) *
      (1 + curStats.curAllDamage / 100 + plusStats.curAllDamage / 100) *
      (1 + curStats.curMonsterDamage / 100 + plusStats.curMonsterDamage / 100) *
      ((curStats.curCritical / 1000 + plusStats.curCritical / 1000) *
        (1.2 + curStats.curCriDamage / 100 + plusStats.curCriDamage / 100) +
        (1 - curStats.curCritical / 1000 - plusStats.curCritical));

    setAfDamage(totalCurDamage);
  };

  const percentDamage = () => {
    let totalCurDamage =
      curStats.curDamage *
      (1 + curStats.curSpeed / 100) *
      (1 + curStats.curAllDamage / 100) *
      (1 + curStats.curMonsterDamage / 100) *
      ((curStats.curCritical / 1000) * (1.2 + curStats.curCriDamage / 100) +
        (1 - curStats.curCritical / 1000));

    let afterDamage =
      (curStats.curDamage + plusStats.curDamage) *
      (1 + curStats.curSpeed / 100 + plusStats.curSpeed / 100) *
      (1 + curStats.curAllDamage / 100 + plusStats.curAllDamage / 100) *
      (1 + curStats.curMonsterDamage / 100 + plusStats.curMonsterDamage / 100) *
      ((curStats.curCritical / 1000 + plusStats.curCritical / 1000) *
        (1.2 + curStats.curCriDamage / 100 + plusStats.curCriDamage / 100) +
        (1 - curStats.curCritical / 1000 - plusStats.curCritical / 1000));

    setPercent((afterDamage / totalCurDamage - 1) * 100);
  };

  useEffect(() => {
    damageTotal();
    afterDamage();
    percentDamage();
  }, [curStats, plusStats]);

  return (
    <div>
      <div>
        <b>현재 스탯을 입력하시오.</b>
        <br />
        <div>
          <p>공격력 : </p>
          <input
            type="number"
            name="curDamage"
            value={curStats.curDamage}
            onChange={handleChange}
          />
          <br />
          <p>공격속도 : </p>
          <input
            type="number"
            name="curSpeed"
            value={curStats.curSpeed}
            onChange={handleChange}
          />
          <br />
          <p>치명타 : </p>
          <input
            type="number"
            name="curCritical"
            value={curStats.curCritical}
            onChange={handleChange}
          />
          <br />
          <p>치명타 피해 : </p>
          <input
            type="number"
            name="curCriDamage"
            value={curStats.curCriDamage}
            onChange={handleChange}
          />
          <br />
          <p>모든 피해 : </p>
          <input
            type="number"
            name="curAllDamage"
            value={curStats.curAllDamage}
            onChange={handleChange}
          />
          <br />
          <p>몬스터 피해 : </p>
          <input
            type="number"
            name="curMonsterDamage"
            value={curStats.curMonsterDamage}
            onChange={handleChange}
          />
          <br />
        </div>
        <br />
      </div>
      <div>
        <b>스탯 증감량을 입력하시오.</b>
        <br />
        <div>
          <p>공격력 : </p>
          <input
            type="number"
            name="curDamage"
            value={plusStats.curDamage}
            onChange={handleChange2}
          />
          <br />
          <p>공격속도 : </p>
          <input
            type="number"
            name="curSpeed"
            value={plusStats.curSpeed}
            onChange={handleChange2}
          />
          <br />
          <p>치명타 : </p>
          <input
            type="number"
            name="curCritical"
            value={plusStats.curCritical}
            onChange={handleChange2}
          />
          <br />
          <p>치명타 피해 : </p>
          <input
            type="number"
            name="curCriDamage"
            value={plusStats.curCriDamage}
            onChange={handleChange2}
          />
          <br />
          <p>모든 피해 : </p>
          <input
            type="number"
            name="curAllDamage"
            value={plusStats.curAllDamage}
            onChange={handleChange2}
          />
          <br />
          <p>몬스터 피해 : </p>
          <input
            type="number"
            name="curMonsterDamage"
            value={plusStats.curMonsterDamage}
            onChange={handleChange2}
          />
          <br />
        </div>
      </div>
      <br />
      <b>기본 데미지 : {Damage}</b>
      <br />
      <b>스탯 추가 후 데미지 : {afDamage}</b>
      <br />
      <b>데미지 증가율 : {percent}</b>
      <br />
    </div>
  );
}
