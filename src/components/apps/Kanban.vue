<template>
  <div class="drag-container">
    <ul class="drag-list">
      <li v-for="stage in stages" :key="stage" class="drag-column board-portlet" :class="{['drag-column-' + stage]: true}">
        <span class="drag-column-header">
          <slot :name="stage">
            <h2>{{ stage }}</h2>
          </slot>
        </span>
        <div class="drag-options" />
        <ul ref="list" class="drag-inner-list portlet-card-list" :data-status="stage">
          <li v-for="block in getBlocks(stage)" :key="block.id" class="drag-item portlet-card" :data-block-id="block.id">
            <slot :name="block.id">
              <strong>{{ block.status }}</strong>
              <div>{{ block.id }}</div>
            </slot>
          </li>
        </ul>
        <div class="drag-column-footer add-portlet">
          <slot :name="`footer-${stage}`" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import dragula from 'dragula';
export default {
  name: 'KanbanBoard',
  props: {
    stages: {},
    blocks: {},
  },
  data() {
    return {
    };
  },
  computed: {
    localBlocks() {
      return this.blocks;
    },
  },
  updated() {
    this.drake.containers = this.$refs.list;
  },
  mounted() {
    this.drake = dragula(this.$refs.list)
      .on('drag', (el) => {
        el.classList.add('is-moving');
      })
      .on('drop', (block, list) => {
        let index = 0;
        for (index = 0; index < list.children.length; index += 1) {
          if (list.children[index].classList.contains('is-moving')) {
            break;
          }
        }
        this.$emit('update-block', block.dataset.blockId, list.dataset.status, index);
      })
      .on('dragend', (el) => {
        el.classList.remove('is-moving');
        window.setTimeout(() => {
          el.classList.add('is-moved');
          window.setTimeout(() => {
            el.classList.remove('is-moved');
          }, 600);
        }, 100);
      });
  },
  methods: {
    getBlocks(status) {
      return this.localBlocks.filter(block => block.status === status);
    },
  },
};
</script>
