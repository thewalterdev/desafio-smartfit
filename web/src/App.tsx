import Header from "./components/Header";
import Form from "./components/Form/Form";
import ResultsCaptions from "./components/ResultsCaptions/ResultsCaptions";
import ResultCard from "./components/ResultCard";
import axios from "axios";
import { useState } from "react";
import Location from "./types/locationType";
import Footer from "./components/Footer";

export default function App() {
  const [unitList, setUnitList] = useState<Location[]>([]);

  async function submitForm(formFilters: {
    period: string;
    showClosedUnits: boolean;
  }) {
    try {
      const res = await axios.get(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      );
      const data: Location[] = res.data.locations;
      await dataFiltering(data, {
        period: formFilters.period,
        closedUnits: formFilters.showClosedUnits,
      });
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  async function dataFiltering(
    data: Location[],
    filters: { period: string; closedUnits: boolean }
  ) {
    var filteredList: Location[] = [];

    for (const unit of data) {
      const todayWeekday = new Date().getDay();

      if (unit.schedules && Array.isArray(unit.schedules)) {
        for (const schedule of unit.schedules) {
          const [openingHour, _] = schedule.hour.split(" às ");
          const openingHourNumber = parseInt(openingHour.replace("h", ""), 10);

          if (transformWeekday(todayWeekday) === schedule.weekdays) {
            switch (filters.period) {
              case "morning":
                if (openingHourNumber >= 5) {
                  filteredList.push(unit);
                }
                break;
              case "afternoon":
                if (openingHourNumber >= 11) {
                  filteredList.push(unit);
                }
                break;
              case "evening":
                if (openingHourNumber >= 17) {
                  filteredList.push(unit);
                }
                break;
            }
          }
        }
      }
    }

    if (filters.closedUnits) {
      setUnitList(filteredList);
    } else {
      const filteredListWithoutClosedUnits = filteredList.filter(
        (unit) => unit.opened !== false
      );
      setUnitList(filteredListWithoutClosedUnits);
    }
  }

  function transformWeekday(weekday: number) {
    switch (weekday) {
      case 0:
        return "Dom.";
      case 6:
        return "Sáb.";
      default:
        return "Seg. à Sex.";
    }
  }

  return (
    <>
      <Header />
      <Form onSubmitFunction={submitForm} results={unitList.length} />
      <ResultsCaptions />
      <ResultCard.Container>
        {unitList.map((unitInfo, i) => {
          return (
            <ResultCard.Card
              key={`${unitInfo.title}-${unitInfo.content}-${i}`}
              unitInfo={{
                openedStatus: unitInfo.opened,
                unitName: unitInfo.title,
                unitFullAddress: unitInfo.content,
                requirements: {
                  fountain: unitInfo.fountain,
                  lockerroom: unitInfo.locker_room,
                  mask: unitInfo.mask,
                  towel: unitInfo.towel,
                },

                schedules: unitInfo.schedules,
              }}
            />
          );
        })}
      </ResultCard.Container>
      <Footer />
    </>
  );
}
