import ContentLoader from "react-content-loader";

export function ProjectLoading() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <ContentLoader height={"360"} width={"100%"}>
        <rect x="0" y="0" rx="0" ry="0" width="389" height="260" />
        <rect x="870" y="0" rx="0" ry="0" width="280" height="260" />
      </ContentLoader>
    </div>
  );
}
