const filteredPhones = (data, text) => {
    const { byId, allIds } = data;
    const textLowerCase = text.toLowerCase();

    return allIds
        .filter((item) => {
            const currentName = byId[item].name.toLowerCase();
            if (!currentName.startsWith(textLowerCase)) {
                return false;
            }

            return byId[item];
        })
        .map((item) => byId[item]);
};

export default filteredPhones;
