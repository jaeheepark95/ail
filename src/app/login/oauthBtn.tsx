"use client";

import { createClient } from "@/utils/supabase/client";

export default function OauthBtn() {
  async function signInWithKakao() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
  }
  return (
    <div>
      <button onClick={signInWithKakao}>카카오 로그인</button>
    </div>
  );
}
