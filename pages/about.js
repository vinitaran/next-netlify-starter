import Head from "next/head";
import React from "react";

const about = () => {
	return (
		<div>
			<Head>
				<title>About us</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					property="og:image"
					content="https://st2.depositphotos.com/3591429/10566/i/600/depositphotos_105666254-stock-photo-business-people-at-meeting-and.jpg"
				/>
                <meta property="og:description" content="This is about us" />
			</Head>
			<h1>About us</h1>
		</div>
	);
};

export default about;
