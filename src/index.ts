import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
// matchReader.matches - this is the array of MatchData tuples
summary.buildAndPrintReport(matchReader.matches);
