import { createClient } from "@/utils/supabase/client";

export const fetchImages = async () => {
  const supabase = createClient();

  //   const { data, error } = await supabase.storage.from("iamges").list("", {
  //     limit: 100,
  //     offset: 0,
  //     sortBy: { column: "name", order: "asc" },
  //   });

  const { data, error } = await supabase.storage.getBucket("avatars");

  if (error) {
    console.error(error);
    return [];
  }

  //   const imageUrls = data.map((file) => ({
  //     name: file.name,
  //     url: supabase.storage.from("avatars").getPublicUrl(file.name),
  //   }));

  //   return imageUrls;
  return data;
};
