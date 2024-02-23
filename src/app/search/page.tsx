import { filters } from "@/Utils/constants/SearchData";
import { SearchResultData, SearchParamsType } from "@/Utils/types/interface";
import Footer from "@/components/Footer/Footer";
import Map from "@/components/Global/Map";
import Header from "@/components/Header/Header";
import ListingCard from "@/components/Search/ListingCard";
import { getData } from "@/services/api";
import { format } from "date-fns";

const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParamsType;
}) => {
  let FormattedStartDate;
  let FormattedEndDate;
  if (startDate && endDate) {
    FormattedStartDate = format(new Date(startDate), "dd MMMM yy");
    FormattedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${FormattedStartDate} - ${FormattedEndDate}`;

  const getSearchResults: SearchResultData = await getData("/b/5NPS");

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests `} />
      <main>
        <section>
          <div className="container flex">
            <div className="pt-14 pr-4">
              <p className="text-xs">
                300+ Stays - {range} - for {numOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6 ">
                Stays in {location}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                {filters.map((filter) => (
                  <button type="button" className="filter-btn" key={filter}>
                    {filter}
                  </button>
                ))}
              </div>
              <div>
                {getSearchResults.map((listing) => (
                  <ListingCard key={listing.title} {...listing} />
                ))}
              </div>
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[550px]">
              <Map searchResultData={getSearchResults} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
