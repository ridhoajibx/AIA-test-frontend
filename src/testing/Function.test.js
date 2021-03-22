const nextPage = (val1, val2) => {
    if (val1 < val2) {
        const nextPage = val1 + 1;
        return nextPage;
    }
};

const prevPage = (val) => {
    if (val > 1) {
        const prevPage = val - 1;
        return prevPage;
    }
};

test('fungsi pagination', ()=>{
    expect(nextPage(1, 2)).toBe(2);
    expect(prevPage(2)).toBe(1);
})