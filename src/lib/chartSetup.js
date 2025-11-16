import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,          // <-- THIS IS THE MISSING ONE
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register everything you will ever use
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,          // <-- Pie/Doughnut needs this
  Title,
  Tooltip,
  Legend
);