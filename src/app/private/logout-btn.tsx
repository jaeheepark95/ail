"use client";

import { createClient } from "@/utils/supabase/client";

export default async function SignOut() {
  const supabase = createClient();

  return (
    <div>
      <button
        onClick={async () => {
          const { error } = await supabase.auth.signOut();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}
