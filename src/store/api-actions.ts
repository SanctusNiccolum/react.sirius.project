

export const getMainListAction = async () => {
    const response = await fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/main`,
        {method: 'GET',}
    );
    return await response.json();
}