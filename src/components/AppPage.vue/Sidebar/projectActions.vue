<script setup>
import ActionItem from "./actionItem.vue";
import AboveSvg from "./Svg/aboveSvg.vue";
import BelowSvg from "./Svg/belowSvg.vue";
import EditSvg from "./Svg/editSvg.vue";
import ShareSvg from "./Svg/shareSvg.vue";
import FavoritesSvg from "./Svg/favoritesSvg.vue";
import DublicateSvg from "./Svg/dublicateSvg.vue";
import EmailSvg from "./Svg/emailSvg.vue";
import FeedSvg from "./Svg/feedSvg.vue";
import ArchiveSvg from "./Svg/archiveSvg.vue";
import DelegateSvg from "../../features/components/fourthSection/Svg/delegateSvg.vue";
import DeleteSvg from "./Svg/deleteSvg.vue";
</script>
<template>
  <div>
    <div
      class="
        w-[250px]
        bg-white
        border-2 border-gray-200
        rounded-md
        shadow-md
        p-1
      "
    >
      <ActionItem>
        <template #svg>
          <AboveSvg />
        </template>
        <template #text> Add project above </template>
      </ActionItem>
      <ActionItem>
        <template #svg>
          <BelowSvg />
        </template>
        <template #text> Add project below </template>
      </ActionItem>
      <hr class="py-1">
      <ActionItem>
        <template #svg>
            <EditSvg/>
        </template>
        <template #text> Edit project </template>
      </ActionItem>
        <ActionItem>
            <template #svg>
                <FavoritesSvg/>
            </template>
            <template #text> Add to favorites </template>
        </ActionItem>
        <ActionItem>
            <template #svg>
                <DublicateSvg/>
            </template>
            <template #text> Duplicate project </template>
        </ActionItem>
        <hr class="py-1">
        <ActionItem>
            <template #svg>
                <EmailSvg/>
            </template>
            <template #text> Email tasks to this project </template>
        </ActionItem>
        <ActionItem>
            <template #svg>
                <FeedSvg/>
            </template>
            <template #text>Project calendar feed</template>
        </ActionItem>
        <ActionItem>
            <template #svg>
                <ArchiveSvg/>
            </template>
            <template #text>Archive project</template>
        </ActionItem>
        <hr class="py-1">
        <ActionItem>
            <template #svg>
                <DeleteSvg/>
            </template>
            <template #text>Delete project</template>
        </ActionItem>
    </div>
  </div>
</template>