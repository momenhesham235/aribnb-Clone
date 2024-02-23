export const getData = async (param: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${param}`);
    const DataReturn = await res.json();
    return DataReturn;
  } catch (error) {
    console.log(error);
  }
};
