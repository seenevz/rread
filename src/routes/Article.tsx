import { useEffect, useRef, useState } from "preact/hooks";
import { useHistory } from "react-router-dom";
import { getSiteData } from "../utils";

type ArticleProps = {};
const parser = new DOMParser();

export default function Article({}: ArticleProps) {
  const ref = useRef<HTMLDivElement>();
  const {
    location: { state },
  }: { location: { state: any } } = useHistory();

  const [doc, setDoc] = useState<Document | null>(null);

  useEffect(() => {
    console.log(state);
    if (state.link) {
      getSiteData(state.link).then(data => {
        setDoc(parser.parseFromString(data, "text/html"));
      });
    }
  }, [state.link]);

  useEffect(() => {
    if (ref.current && doc) {
      const shadow = ref.current.attachShadow({ mode: "closed" });
      shadow.append(doc.head, doc.body);
    }

    return () => (ref.current!.innerHTML = "");
  }, [doc]);

  doc && console.log(doc);

  return <main ref={ref}></main>;
}
