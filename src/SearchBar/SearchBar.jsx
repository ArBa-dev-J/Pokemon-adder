import searchIcon from "../assets/search.png";


function SearchBar() {
  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          className="
          border pl-5 pr-5 rounded-[10px] bg-no-repeat bg-position-[200px]   
          "
          style={{backgroundImage: `url(${searchIcon})`}}
        />
      </div>
    </>
  );
}

export default SearchBar;
