export const login = async (locale: string, email: string, password: string) => {
  try {
    const url = `/${locale}/api/login`;
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(async res => ({ status: res.status, data: await res.json() }));

    const { status, data } = result;

    if (status !== 200) throw result

    return data;
  } catch (e) {
    console.log("🚀 ~ file: login.service.ts:19 ~ login ~ e:", e)
    throw new Error(JSON.stringify(e));
  }
}