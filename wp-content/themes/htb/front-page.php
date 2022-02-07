<?php
get_header();
?>

	<div id="primary" class="content-area homepage">
		<main id="main" class="site-main">

			<section class="homepage__section homepage__section--one">
				
				<div class="speech-section-wrap">
					

					<div class="speech-bubble" id="initial">
						<p class="visible-text-container"></p>
						<p class="statement">...</p>
						<p class="statement">...</p>
						<p class="statement">omg hi!</p>
						<p class="statement">I must've forgotten to lock the door again, huh?</p>
						<p class="statement">I didn't expect you to just barge in here, honestly...</p>
						<p class="statement">But, no bother! Welcome!</p>
						<p class="question">How are you?</p>
					</div>
					<div class="answer-container">
						<p class="answer" id="good-you">1. Good! You?</p><!-- Make the conversation awkward. "Good to hear! I'm good thank you. Um..."-->
						<p class="answer" id="i-think-im-lost">2. I think I'm lost...</p><!-- if this is clicked, get trippy. "You are not lost, my child." -->
						<p class="answer" id="who-are-you">3. Who are you?</p><!-- Dunno, do something here. Something funny. "I'm Harry! Harry the Bastard, of course! It's literally in the URL." -->
					</div>
					

					<div class="speech-bubble" id="good-you">
						<p class="visible-text-container"></p>
						<p class="statement">[SMALL TALK]</p>
					</div>
					
					<div class="speech-bubble" id="i-think-im-lost">
						<p class="visible-text-container"></p>
						<p class="statement">You are not lost, my child.</p>
					</div>
					
					<div class="speech-bubble" id="who-are-you">
						<p class="visible-text-container"></p>
						<p class="statement">I'm Harry! Harry the Bastard, of course! It's literally in the URL.</p>
					</div>

				</div>

			</section>

			<section>
				
			</section>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php
get_footer();
