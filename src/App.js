import "./App.css";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import Overview from "./components/Overview";
import MiniCard from "./components/MiniCard";

function App() {
	return (
		<div className="bg-layer">
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
			<div className="grid-container">
				<MiniCard
					title="Page Views"
					service="facebook"
					movement="up"
					todayCount={87}
					percentage={3}
				/>
				<MiniCard
					title="Likes"
					service="facebook"
					movement="down"
					todayCount={52}
					percentage={2}
				/>
				<MiniCard
					title="Likes"
					service="instagram"
					movement="down"
					todayCount={5462}
					percentage={2257}
				/>
				<MiniCard
					title="Profile Views"
					service="instagram"
					movement="up"
					todayCount="52k"
					percentage={1375}
				/>

				<MiniCard
					title="Retweets"
					service="twitter"
					movement="up"
					todayCount={117}
					percentage={303}
				/>
				<MiniCard
					title="Likes"
					service="twitter"
					movement="up"
					todayCount={507}
					percentage={553}
				/>
				<MiniCard
					title="Likes"
					service="youtube"
					movement="down"
					todayCount={107}
					percentage={19}
				/>
				<MiniCard
					title="Total Views"
					service="youtube"
					movement="down"
					todayCount={1407}
					percentage={12}
				/>
			</div>
		</div>
	);
}

export default App;
