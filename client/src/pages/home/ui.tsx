import { useChageTitle } from "../../features/changeTitle";
import { Section01, Add } from "./styles";

export default function Home() {
    useChageTitle({title: "홈"});

    return (
        <main>
            <Section01>
                
            </Section01>
            <Section01>
                <Add to={"/add"}>글 추가하기</Add>
            </Section01>
        </main>
    )
}