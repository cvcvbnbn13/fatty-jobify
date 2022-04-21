import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, '請填寫應徵公司名'],
    },
    position: {
      type: String,
      required: [true, '請填寫職稱'],
    },
    status: {
      type: String,
      enum: ['錄取', '等待中', '未錄取', '尚未面試'],
      default: '等待中',
      required: [true, '請選擇面試結果'],
    },
    jobType: {
      type: String,
      enum: ['正職', '實習', '兼職', '其他'],
      default: '正職',
    },
    jobLocation: {
      type: String,
      default: '新北市永和',
      required: [true, '請填寫工作區域'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, '請確認新增工作者'],
    },
    date: {
      type: Date,
      required: [true, '請填寫面試時間'],
      default: '2022-04-18',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
