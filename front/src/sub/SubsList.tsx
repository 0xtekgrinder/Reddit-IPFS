import Sub from "./Sub";
import SubPreview from "./SubPreview";
import PreviewList from "../reddit/PreviewList";

export default function SubsList({ subs, onSelect }: { subs: Sub[], onSelect: (sub: Sub) => void }) {
    return PreviewList<Sub>({
        elems: subs,
        elemFct: elem => <SubPreview sub={elem} onSelect={onSelect}/>
    });
}
