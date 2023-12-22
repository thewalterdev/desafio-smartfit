export default interface Location {
  title: string;
  content: string;
  mask: "recommended" | "required";
  towel: "recommended" | "required";
  fountain: "partial" | "prohibited";
  locker_room: "allowed" | "partial" | "closed";
  opened: boolean;

  schedules: {
    weekdays: string;
    hour: string;
  }[];
}
