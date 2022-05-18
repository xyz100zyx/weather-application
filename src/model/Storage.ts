export const storage = {
    setItem: (name: string, item: any) => {
        localStorage.setItem(name, JSON.stringify(item)); //преобразуем айтем в JSON и добавляем в хранилище
    },
    getItem: (name: string) => {
        const item = localStorage.getItem(name);

        if(item){
            return JSON.parse(item); //если айтем есть, то мы его распарсим из JSON и возвращаем в таком виде, каком он был
        }
    }
};