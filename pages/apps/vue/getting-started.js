import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>VueJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک VueJS</h1>
    <span className="pageDescription">(VueJS Framework)</span>
    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه VueJS ای‌ که
      نوشتید را روی بستر ابری Liara مستقر کنید. برای راحتی شما با یک مثال واقعی
      تمام مراحل رو پیش میبریم. میتونید این پروژه رو از github دریافت کنید:
      (البته بدون در نظرگرفتن این پروژه تستی نیز میتوانید نحوه استقرار
      برنامه‌ی‌تان را یاد بگیرید.)
    </p>
    <pre>
      <code>
        {`$ git clone https://github.com/liara-cloud/vue-getting-started
$ cd vue-getting-started`}
      </code>
    </pre>
    <p>
      برای این که مطمئن بشید همه چیز درست کار میکنه کافیه دستورات
      <span className="code">npm isntall</span> و{" "}
      <span className="code">npm run serve</span> رو وارد کنید و اگر پروژه با
      موفقیت روی سیستم شما اجرا شد، یعنی که آماده هستیم که اون‌ رو بر بستر لیارا
      نیز مستقر کنیم.
    </p>

    <Link href="/apps/vue/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
