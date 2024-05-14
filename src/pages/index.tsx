const screen = "PHOTO";
export default function Home() {
  return (
    <>
      {screen === "PHOTO" && <div>Photo</div>}
      {screen !== "PHOTO" && <div>Sem a foto</div>}
      <div>Ola</div>
    </>
  );
}
