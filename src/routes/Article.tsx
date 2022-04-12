import { useEffect, useRef, useState } from "preact/hooks";
import { getSiteData, myFetch } from "../utils";

type ArticleProps = {};
const parser = new DOMParser();

export default function Article({}: ArticleProps) {
  const ref = useRef<HTMLDivElement>();
  const [doc, setDoc] = useState<Document | null>(null);

  useEffect(() => {
    getSiteData("https://www.bbc.co.uk").then(data => {
      setDoc(parser.parseFromString(data, "text/html"));
    });
  }, []);

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
