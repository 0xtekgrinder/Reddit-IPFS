import {CSSProperties, ReactElement, useState} from "react";
import {Spinner} from "@chakra-ui/react";

export default function Loader<T>({actionFct, displayFct, actionFctArgs} : {actionFct: (args?: any) => Promise<T>, displayFct: (data: T) => ReactElement, actionFctArgs?: any}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>();

    if (loading) {
        actionFct(actionFctArgs)
            .then((data) => {
                setData(data);
                setLoading(false);
            });
        const style: CSSProperties = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
        return <Spinner
            style={style}
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    } else
        return displayFct(data as T);
}