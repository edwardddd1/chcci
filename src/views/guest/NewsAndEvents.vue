<template>
  <image-title-header
    titleHeader="NEWS AND EVENTS"
    :banner="require('@/assets/resources/banner/banner.jpg')"
    topValue="80%"
  />

  <!-- 🌟 Post Display Section -->
  <div class="container mt-5">
    <h3 class="fw-bold text-center text-primary mb-4">📢 Latest Announcements</h3>

    <div class="row g-4">
      <div
        v-for="(item, index) in dataList"
        :key="index"
        class="col-lg-6 col-md-12"
      >
        <div class="card-modern p-4 rounded-4 shadow-sm h-100">
          <h5 class="fw-bold text-dark">{{ item.titleName }}</h5>
          <span class="text-muted small d-block mb-2">
            <span class="badge bg-primary">{{ item.author }}</span>
          </span>
          <p class="text-secondary">{{ item.description }}</p>

          <div
            class="ratio ratio-16x9 rounded-3 overflow-hidden mt-3"
            v-html="item.frameUrl"
          ></div>
        </div>
      </div>
    </div>
  </div>

    <div class="post-form container mt-5 p-5 shadow-lg rounded-5 bg-glass">
    <h2 class="fw-bold text-center text-gradient mb-4">
       Add New Announcement
    </h2>
    <p class="text-center text-secondary mb-5">
      Share the latest updates and events from Concepcion Holy Cross College.
    </p>

    <form @submit.prevent="addPost" class="row g-4">
      <div class="col-md-6">
        <label class="form-label fw-semibold">Post Title</label>
        <input
          type="text"
          v-model="newPost.titleName"
          class="form-control modern-input"
          placeholder="Enter post title"
          required
        />
      </div>

      <!-- Fixed Author -->
      <input type="hidden" v-model="newPost.author" />

      <div class="col-md-6">
        <label class="form-label fw-semibold">Facebook Embed (iframe)</label>
        <input
          type="text"
          v-model="newPost.frameUrl"
          class="form-control modern-input"
          placeholder="Paste Facebook embed iframe"
          required
        />
      </div>

      <div class="col-12">
        <label class="form-label fw-semibold">Description</label>
        <textarea
          v-model="newPost.description"
          class="form-control modern-input"
          rows="4"
          placeholder="Write a short description of the event..."
          required
        ></textarea>
      </div>

      <div class="col-12 text-center mt-3">
        <button type="submit" class="btn-modern">
          <i class="bi bi-plus-circle-fill me-2"></i>Post Announcement
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ImageTitleHeader from '@/components/main-layouts/components/widgets/ImageTitleHeader.vue'

export default {
  name: 'NewsAndEvents',
  components: { ImageTitleHeader },
  data() {
    return {
      dataList: [
        {
          titleName: 'CHCC OFFICIAL ANNOUNCEMENT',
          author: 'Concepcion Holy Cross College',
          frameUrl:
            '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FConcepcionHolyCrossCollege%2Fposts%2Fpfbid037C5KnDUh3XZfJehM8BbtTFNXWmVKgsLk3pY9iU8YE4PZsXPY8A8A43GkRqSQiPjkl&show_text=true&width=500" width="100%" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>',
          description:
            'Stay tuned for the latest news, events, and announcements from Concepcion Holy Cross College. Follow our official Facebook page for more updates.'
        },
        {
          titleName: '𝗘𝗬𝗘𝗦 𝗛𝗘𝗥𝗘 𝗖𝗥𝗢𝗦𝗦𝗜𝗔𝗡𝗦: 𝐒𝐈𝐆𝐍𝐈𝐍𝐆 𝐎𝐅 𝐂𝐋𝐄𝐀𝐑𝐀𝐍𝐂𝐄 𝐒𝐂𝐇𝐄𝐃𝐔𝐋𝐄 | 𝐍𝐨𝐯𝐞𝐦𝐛𝐞𝐫 𝟏𝟎–𝟐𝟏, 𝟐𝟎𝟐𝟓',
          author: 'Concepcion Holy Cross College',
          frameUrl:
            '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FConcepcionHolyCrossCollege%2Fposts%2Fpfbid028PKx8qeYmgoNNco5UQN2F7nRk8pa4aAc5EhHueAoUuGYYdc2GpAXrFDti8hJc1c7l&show_text=true&width=500" width="500" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
          description:
            'All students are reminded to follow their designated schedule as posted to ensure a smooth and organized process.'
        }
      ],
      newPost: {
        titleName: '',
        author: 'Concepcion Holy Cross College',
        description: '',
        frameUrl: ''
      }
    }
  },
  methods: {
    addPost() {
      this.dataList.unshift({ ...this.newPost })
      this.newPost = {
        titleName: '',
        author: 'Concepcion Holy Cross College',
        description: '',
        frameUrl: ''
      }
    }
  }
}
</script>

<style scoped>
/* 🌈 Modern Gradient Text */
.text-gradient {
  background: linear-gradient(90deg, #0062ff, #00bfff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 🌟 Glass effect container */
.bg-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* 🧩 Input Styling */
.modern-input {
  border-radius: 12px;
  border: 1px solid #d0d7e2;
  padding: 0.9rem;
  transition: all 0.25s ease;
  font-size: 0.95rem;
}

.modern-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

/* 💎 Button Styling */
.btn-modern {
  background: linear-gradient(135deg, #0062ff, #0096ff);
  color: #fff;
  border: none;
  padding: 0.8rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.btn-modern:hover {
  background: linear-gradient(135deg, #0052cc, #0078e8);
  transform: translateY(-2px);
}

/* 📰 Modern Card Design */
.card-modern {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.card-modern:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* 📱 Responsive adjustments */
@media (max-width: 768px) {
  .post-form {
    padding: 2rem;
  }

  .btn-modern {
    width: 100%;
  }
}
</style>
