import "./App.css";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import Overview from "./components/Overview";

function App() {
	return (
		<>
			<Header
				headerTitle="Social Media Dashboard"
				totalFollowers="23,004"
			/>
			<div className="grid-container">
				<MainCard
					service="facebook"
					socialHandle="@nathanf"
					followerCount={1987}
					followerText="Followers"
					movement="up"
					dailyCount={12}
				/>
				<MainCard
					service="twitter"
					socialHandle="@nathanf"
					followerCount={1044}
					followerText="Followers"
					movement="up"
					dailyCount={99}
				/>
				<MainCard
					service="instagram"
					socialHandle="@realnathanf"
					followerCount="11k"
					followerText="Followers"
					movement="up"
					dailyCount={1099}
				/>
				<MainCard
					service="youtube"
					socialHandle="Nathan F."
					followerCount={8239}
					followerText="Subscribers"
					movement="down"
					dailyCount={144}
				/>
			</div>
			<Overview overviewTitle="Overview - Today" />
		</>
	);
}

export default App;
