"use client";

import { useState, useEffect } from "react";

interface Monsters {
  name: string;
  gentime: number;
  isChecked: Boolean;
}

const datas = [
  // 디엔 북부
  { name: "비명날개", gentime: 15 },
  // 잿빛 성터
  { name: "수상한 마법사", gentime: 15 },
  { name: "어둠 영혼체", gentime: 15 },
  // 오염된 분지
  { name: "난폭한 도살자", gentime: 10 },
  { name: "오염된 껍질벌레", gentime: 10 },
  // 비밀 실험실
  { name: "비밀 피조물", gentime: 10 },
  { name: "마법 인형", gentime: 10 },
  { name: "마법사의 총애", gentime: 10 },
  // 초승달 호수
  { name: "라미아 주술사", gentime: 10 },
  { name: "앙쿠스토", gentime: 10 },
  // 황혼의 구릉지
  { name: "폭주한 타르두스", gentime: 10 },
  { name: "고대 타르두스", gentime: 10 },
  { name: "돌격의 타르두스", gentime: 10 },
  // 울란 협곡
  { name: "사막 골렘", gentime: 10 },
  { name: "알라락", gentime: 10 },
  { name: "고대 거북", gentime: 10 },
  // 수호자의 유적지
  { name: "검은 손아귀", gentime: 10 },
  { name: "유적지 수호자", gentime: 10 },
  { name: "고대 수호자", gentime: 10 },
  // 절규하는 자의 사막
  { name: "검은 쐐기", gentime: 10 },
  { name: "인티캄", gentime: 10 },
  { name: "사막 수호자", gentime: 10 },
];

export default function Home() {
  const [ischecked, setIsChecked] = useState<Boolean[]>();
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [timer, setTimer] = useState<number | null>(null);
  const [monsterList, setMonsterList] = useState<Monsters[]>();

  setMonsterList(datas.map((data, index)=>()));

  const now = new Date();

  const handleClick = (name: string, alarmTime: number) => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString());
    setSelectedName(name);

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      alert(`알람! ${name}의 ${alarmTime}초 후 알람입니다.`);
    }, alarmTime * 1000);

    setTimer(newTimer);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <div>
      <h1>로드나인 정예 몬스터 타이머</h1>
      <h2>즐겨찾기</h2>
      <ul></ul>
      <li>네임드 사이클</li>
      <li></li>
      <li></li>
      <li></li>
      <ul>
        {datas.map((item, index) => (
          <li key={index}>
            <input type="checkbox" id={item.name} />
            {"  "}
            {item.name}
            {/* {"  "}
            <button onClick={() => handleClick(item.name, item.gentime)}> */}
            {/* 처치 */}
            {/* </button> */}
            {"  "}
            {/* 처치 시간 */} {/* 젠 타이머 */}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
