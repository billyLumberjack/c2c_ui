<template>
  <div class="section has-background-white-print">
    <document-view-header :document="document" :version="version" :promise="promise" />
    <div v-if="document" class="columns">
      <div class="column is-3">
        <div class="box">
          <activities-field v-if="document.activities && document.activities.length" :document="document" />

          <field-view :document="document" :field="fields.date_time" />

          <field-view :document="document" :field="fields.author" />

          <label-value v-if="document.creator" :label="$gettext('contributor')">
            <contributor-link :contributor="document.creator" />
          </label-value>

          <field-view :document="document" :field="fields.image_type" />
          <field-view :document="document" :field="fields.quality" />
          <field-view :document="document" :field="fields.categories" />
          <field-view :document="document" :field="fields.camera_name" />
          <field-view :document="document" :field="fields.exposure_time" />
          <field-view :document="document" :field="fields.fnumber" />
          <field-view :document="document" :field="fields.focal_length" />
          <field-view :document="document" :field="fields.iso_speed" />
          <field-view :document="document" :field="fields.filename" />
          <field-view :document="document" :field="fields.file_size" unit="ko" :divisor="1024" />
          <field-view :document="document" :field="fields.height" />
          <field-view :document="document" :field="fields.width" />
          <field-view :document="document" :field="fields.elevation" />
        </div>

        <map-box :document="document" />

        <tool-box :document="document" />
      </div>

      <div class="column is-9">
        <div class="box is-paddingless">
          <a :href="getOriginalImageUrl(document)">
            <img class="main-image" :src="getBigImageUrl(document)">
          </a>
        </div>

        <div v-if="locale.summary || locale.description" class="box">
          <markdown-section :document="document" :field="fields.summary" />
          <markdown-section :document="document" :field="fields.description" hide-title />
          <div style="clear:both" />
        </div>

        <routes-box :document="document" hide-buttons />
        <recent-outings-box :document="document" hide-see-all-results-button />
        <images-box v-if="document" :document="document" />
        <comments-box :document="document" />

      </div>

    </div>
  </div>
</template>

<script>
  import imageUrls from '@/js/image-urls';

  import documentViewMixin from './utils/document-view-mixin.js';

  export default {
    mixins: [documentViewMixin],

    methods: {
      getOriginalImageUrl: imageUrls.get,
      getBigImageUrl: imageUrls.getBig
    }
  };
</script>

<style scoped lang="scss">
  .main-image {
    // remove the ugly 4px in the bottom
    display: block;
  }
</style>
