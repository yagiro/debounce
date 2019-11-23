interface Params {
    id: string;
    delayMs: number;
}

interface AnyFunction {
    (arg0: any): any;
}

const timeouts = {};

const debounce = (operation: AnyFunction, params: Params): AnyFunction  => {
    const { id, delayMs } = params;
    
    return function (...args) {
        if (timeouts[id]) {
            clearTimeout(timeouts[id]);
        }
        return new Promise(
            (resolve, reject) => {
                timeouts[id] = setTimeout(() => {
                    try {
                        resolve(operation(...args));
                    }
                    catch(e) {
                        reject(e);
                    }
                }, delayMs); 
            }
        );
    };
};

export default debounce;