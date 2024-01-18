export const getExport = async (param: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${param}`);
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.log(error);
  }
};
