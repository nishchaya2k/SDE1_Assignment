export const fetchData = async (offset) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": 10,
        offset
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)

        const data = await response.json();
        return data.jdList
    }
    catch (err) {
        console.error(err);
    }
}