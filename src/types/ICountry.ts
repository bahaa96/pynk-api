import Locale from "./Locale";

interface ICountry {
  readonly label: Record<Locale, string>;
  readonly value: string;
}

export default ICountry