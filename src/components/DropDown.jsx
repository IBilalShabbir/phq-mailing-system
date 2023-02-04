export default function DropDown({ setIsDropDownOpen }) {
  return (
    <div
      className="dropdown__list__nav"
      onMouseOut={() => {
        setIsDropDownOpen(false);
      }}
    >
      <div className="dropdown__link">Assetsone</div>
      <div className="dropdown__link">Assetsone</div>
      <div className="dropdown__link">Assetsone</div>
    </div>
  );
}
