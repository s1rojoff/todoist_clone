<script setup>
import subLink from "../7.section/subLink.vue";
</script>


<template>
  <div
    class="
      md:grid md:grid-rows-4 md:grid-flow-col md:gap-4 md:mt-20 md:ml-20 md:w-72
      sm:grid sm:grid-rows-1 sm:w-96 sm:m-auto
    "
  >
    <div class="w-72 md:-mt-0 | sm:mb-10 sm:mt-10">
      <h1 class="font-bold text-xl">Tweets</h1>
      <p class="text-xs text-gray-600">
        Follow <sub-link>@Todoist</sub-link> on Twitter
      </p>
    </div>
    <div class="md:-mt-20 md:w-72 | sm:mb-10">
      <p class="text-sm block text-gray-700">
        I should buy a lifetime subscription to @Todoist. It seriously runs my
        life. Work projects, groceries, birthday gift reminders. It’s
        essentially my personal assistant most of the time.
      </p>
      <sub-link href="https://twitter.com/hailleymari/status/978274150275010560"
        >@hailleymari</sub-link
      >
    </div>
    <div class="md:-mt-20 md:w-72 | sm:mb-10">
      <p class="text-sm block text-gray-700">
        Todoist made my life drastically better, it helped me declutter my brain
        to focus on the important things. Because of Todoist, I was able to read
        15 books in 2 months, learn iOS development and spend more time with my
        family
      </p>
      <sub-link href="https://twitter.com/eihab_khan/status/1009325989971841024"
        >@eihab_khan</sub-link
      >
    </div>
    <div class="w-72 md:-mt-10 | sm:mb-10">
      <p class="text-sm block text-gray-700">
        By using Todoist every day I’ve become more productive tan anytime in my
        life. I can’t tell how much I love your software. It’s the first thing I
        look at in the AM and the last thing I do before bed, organize next days
        tasks. Truly love it!
      </p>
      >
      <sub-link
        href="https://twitter.com/douglasabrown/status/1347321195620950026"
        >@douglasabrown</sub-link
      >
    </div>

    <!-- 2-row-->

    <div class="md:w-72 md:ml-16">
      <h1 class="font-bold md:text-xl">App store</h1>
      <p class="text-xs text-gray-600">5 stars, 60K ratings</p>
      <p class="mt-7">★★★★★</p>
    </div>
    <div class="md:-mt-16 md:w-96 md:ml-16 | sm:mb-10">
      <p class="text-sm block text-gray-700">
        I have a side business. And I am always telling people that I will do
        something and then forget. Now, I make a rusult record in my Todoist so
        I can’t forget. My business is better because of it!
      </p>
       <span class="text-xs text-gray-600">June 11, 2019 | Alavagirl</span>
    </div>
    <div class="md:-mt-24 md:w-96 md:ml-16 | sm:mb-10">
      <p>★★★★★</p>
      <p class="text-sm block text-gray-700">
        Todoist has provided just the tool I need for managing work that can so
        easily fall through the cracks. I recommend it to managers of small
        businesses – it can keep you from missing deadlines and due dates.
      </p>
       <span class="text-xs text-gray-600">June 14, 2019 | nlcqulter</span>
    </div>
    <div class="md:w-96 md:-mt-24 md:ml-16 | sm:mb-10">
      <p>★★★★★</p>
      <p class="text-sm block text-gray-700">
        This app has been a fantastic tool in helping me stay organized and on
        track. Pro was a great decision and I am excited to have my work and
        personal life on track! Because of Todoist, I was able to read 15 books
        in 2 months
      </p>
       <span class="text-xs text-gray-600">May 13, 2019 | HP</span>
    </div>

    <!-- 3-row -->

    <div class="md:w-72 md:ml-14">
      <h1 class="font-bold md:text-xl">Play Store</h1>
      <p class="text-xs text-gray-600">Editor’s Choice</p>
      <p class="mt-7">★★★★★</p>
    </div>
    <div class="md:-mt-16 md:w-96 md:ml-14 | sm:mb-10">
      <p class="text-sm block text-gray-700">
        Todoist has reduced my stress levels enormously. I’m doing a PhD and
        juggling several really challenging and unpredictable roles - Todoist is
        helping me stay on top of a really complex range of tasks.
      </p>
       <span class="text-xs text-gray-600">May 27, 2019 | Sally Morgan</span>
    </div>
    <div class="md:-mt-24 md:w-96 md:ml-14 | sm:mb-10">
      <p>★★★★★</p>
      <p class="text-sm block text-gray-700">
        Todoist is the most important app I use. It’s a tremendous way to keep
        track of professional and personal projects and tasks, make lists,
        collaborate at work, and keep track of my kids’ responsibilities.
      </p>
       <span class="text-xs text-gray-600">May 18, 2019 | Eli Rothman</span>
    </div>
    <div class="md:w-96 md:-mt-24 md:ml-14 | sm:mb-10">
      <p>★★★★★</p>
      <p class="text-sm block text-gray-700">
        This app helped me become more productive. I find it really helpful how
        Todoist does reviews of all the completed tasks, as it gives me an
        insight into my productivity pattern. Highly recommend!
      </p>
      <span class="text-xs text-gray-600">February 11, 2019 | Lucy Gao </span>
    </div>
  </div>
</template>