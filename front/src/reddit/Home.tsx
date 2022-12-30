import {CSSProperties, useState} from "react";
import {Spinner, VStack} from "@chakra-ui/react";
import Sub from "../sub/Sub";
import SubsList from "../sub/SubsList";



function loadSubs(clbk: (subs: Sub[]) => void) {
  setTimeout(() => {
    clbk([
      {
        name: "r/programming",
        description: "A subreddit for all things programming"
      },
      {
        name: "r/programminghorror",
        description: "A subreddit for all things programming"
      },
      {
        name: "r/programmingcirclejerk",
        description: "A subreddit for all things programming"
      },
    ]);
  }, 4000 + Math.random() * 3000);
}

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [subs, setSubs] = useState<Sub[]>([]);

    if (loading) {
        loadSubs((subs) => {
            setSubs(subs);
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
        return <SubsList subs={subs} />;
}