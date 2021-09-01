<script lang="ts">
	import logo from './assets/glasses.png';
	import arrow from './assets/arrow.png';

	import discord from './assets/discord.svg';
	import github from './assets/github.svg';
	import mail from './assets/mail.svg';

	let age = new Date().getFullYear() - 2002;
	let exp = new Date().getFullYear() - 2017;

	let hideArrow = false;
	const scroll = (e) => {
		hideArrow = e.target.scrollLeft > 0;
	};
</script>

<main>
	<base target="_blank">
	<section class="profile border">
		<img src={logo} alt="mug shot" class="border-dark">
		<h1>Shane Vandegrift</h1>
		<h3 style="margin:0.5rem 0">Web-Dev Bird</h3>
		<div class="contact">
			<a href="https://respdev.com/discord"><img src={discord} alt="discord" style="color: red"></a>
			<a href="https://github.com/Vandesm14"><img src={github} alt="github" style="color: red"></a>
			<a href="mailto:vandesm14@gmail.com"><img src={mail} alt="mail" style="color: red"></a>
		</div>
	</section>
	<section class="about border">
		<article>
			<h2>Who Am I?</h2>
			<p>
				Good question! I sometimes wonder that myself.
				<br><br>
				I am a {age} year-old
				fullstack Node.js developer with a passion for frontend development.
				I enjoy having too many projects, crazy ideas, and excessive humor
				(haha). I can code, speak English, and even work independently or with
				a team (whoa).
				<br><br>
				I also manage a dev & tech community called
				<a href="https://respdev.com">Responsive</a>. I work on podcast episodes
				and hosting fun events. Responsive is a place for me to live out my
				dream as a "successful" community manager and fail at social media.
			</p>
		</article>
		<article>
			<h2>What Am I Doing?</h2>
			<p>
				I am currently working on the Support Team of Replit as a full-time
				employee (since August 2021). My job is to manage the entire support
				process from beginning to end. I fiddle through emails looking for
				reports of interest then debug those reports to turn them into tickets.
				I also take care of billing and payment processing
				(<i>so many refunds...</i>).
				<br><br>
				A fun quirk of being a developer is that I also have an extended
				knowledge of the infrastructure and can work on my own tools for the
				support team.
			</p>
		</article>
		<article>
			<h2>My Specs</h2>
			<p>
				Who needs those? Can't we just trust each other? No? Well, here are a
				few bullet points for the recruiters out there:
				<ul>
					<li>{exp} years of fullstack NodeJS, Svelte, and Frontend
						experience</li>
					<li>Multimedia and Creative experience</li>
					<li>Support and Debugging experience</li>
					<li>Strong communication and technology skills</li>
					<li>I work well with a team (but who needs 'em?)</li>
				</ul>
		</article>
	</section>
	<section class="projects" on:scroll={scroll}>
		<img src={arrow} alt="arrow" class="arrow" class:hide={hideArrow}>
		<article>
			<a href="https://classaware.org/timer.html">
				<h2>Classaware</h2>
			</a>
			<p>
				A class-countdown system I built for my High School. It is still
				operational and still recieves updates. Classaware was the first
				widespread project I had created in my coding career.
			</p>
		</article>
		<article>
			<a href="https://github.com/vandesm14/clui">
				<h2>The CLUI</h2>
			</a>
			<p>
				My own take off of the CLUI
				<a href="https://github.com/replit/clui">created by Replit</a>. A
				command system and accompanying web client built with Svelte. One of my
				first open-source
				projects and one that I enjoyed quite a bit.
			</p>
		</article>
		<article>
			<a href="https://vandesm14.github.io/ratio-timer/">
				<h2>Ratio Timer</h2>
			</a>
			<p>
				A pomodoro-like timer for tracking your productivity. I built this to
				help people keep track of their work & break hours in a dynamic and
				responsive timer.
			</p>
		</article>
		<article>
			<a href="https://respdev.com">
				<h2>Responsive</h2>
			</a>
			<p>
				That community I talked about in my bio. If you haven't read it, TL;DR:
				It is a dev & tech community I run with a podcast and other fun stuff.
			</p>
		</article>
		<article>
			<a href="#you-are-already-here">
				<h2>Portfolio</h2>
			</a>
			<p>
				The thing you're looking at now. So meta right? I went through various
				iterations over the years, this one being the most recent. I actually
				spent quite a bit of time wireframing and designing this to make it
				look and work the best.
			</p>
		</article>
	</section>
</main>

<style>
	:root {
		--dark: hsl(230, 40%, 20%);
		--medium: hsl(230, 34%, 28%);
		--sort-of-light: hsl(230, 33%, 33%);
		--light: hsl(230, 30%, 36%);
		--lighter: hsl(230, 30%, 40%);
		--text: #e7e7e7;
		--link: rgb(90, 180, 219);
	}

	a {
		color: var(--link);
	}

	.border {
	  border: 2px solid var(--light);
	}

	.border-dark {
		border: 3px solid var(--dark);
	}

	main {
	  display: grid;
	  margin: 0;
	  padding: 1rem;
	  height: calc(100vh - 2rem);
	  background-color: var(--dark);
	  color: var(--text);
	  font-size: 16px;
	  font-family: 'Open Sans', sans-serif;

	  gap: 1rem;
	  grid-template: 1fr 1fr / 1fr 1fr 1fr;
	  grid-template-areas: 'profile about about'
	  'projects projects projects';
	}

	section {
	  border-radius: 8px;
	  background-color: var(--medium);
	  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.11);
		font-size: 1.2rem;
		line-height: 1.5;
	}

	.profile {
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	  justify-content: center;
		padding: 1rem;
		text-align: center;

	  grid-area: profile;
	}

	.profile img {
	  margin-bottom: 20px;
	  width: 200px;
	  height: 200px;
	  border-radius: 50%;
	}

	.profile h1, h3 {
		margin: 0;
	}

	.profile .contact img {
		width: 2.5rem;
		height: 2.5rem;
		filter: invert(1);
		margin: 0 0.5rem;
		transition: transform 150ms ease-out;
	}
	.profile .contact img:hover {
		transform: scale(1.2);
	}

	.about {
	  grid-area: about;
		overflow-y: scroll;
	}

	.about > article {
		padding: 1rem;
	}
	.about > article:not(:last-child) {
		border-bottom: 2px solid var(--light);
	}

	.projects {
	  grid-area: projects;
		display: flex;
		flex-direction: row;
		background: transparent;
		gap: 0 1rem;
		padding-bottom: 1rem;
		overflow-x: scroll;
	}

	.projects > article {
		padding: 1rem;
		min-width: calc((100%)/3 - 3rem + 2px);
	  background-color: var(--medium);
		border: 2px solid var(--light);
		text-align: center;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.projects > .arrow {
		position: absolute;
		top: calc(70%);
		right: 0px;
		transition: transform 200ms ease-out, opacity 200ms ease-out;
		cursor: pointer;
	}
	.projects > .arrow:hover {
		transform: scale(1.2);
	}
	.projects > .arrow.hide {
		opacity: 0;
	}

	@media (max-width: 600px) {
		main {
			display: flex;
			flex-direction: column;
			height: auto;
		}
		.about {
			height: max-content;
		}
		.projects {
			flex-direction: column;
			gap: 1rem;
		}
		.projects > .arrow {
			display: none;
		}
	}
</style>