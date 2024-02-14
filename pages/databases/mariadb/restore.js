import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های MariaDB - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mariadb" />
      <div className="page-title">
        <h1>دیتابیس MariaDB</h1>
        <span className="page-description">(MariaDB Database)</span>
      </div>
    </div>

    <h3>بازیابی فایل پشتیبان</h3>

    <p>
      ممکن است در زمان انتقال سرویس و یا پس از مواجه شدن با هرگونه Data
      corruption تصمیم بگیرید فایل پشتیبان دیتابیس خود را بازیابی کنید.
    </p>

    <h4 id="phpmyadmin">phpMyAdmin</h4>
    <p>
      بازیابی فایل پشتیبان در دیتابیس‌های MySQL و MariaDB یکی از قابلیت‌هایی است
      که ابزار مشهور phpMyAdmin در اختیار شما قرار می‌‌دهد و شما می‌توانید
      به‌شکل زیر از این ابزار برای بازیابی فایل‌های پشتیبان استفاده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/mariadb/restore-backup-into-mariadb-database-with-phpmyadmin.gif" />

    <Notice variant="warning">
      ابزار phpMyAdmin برای بازیابی فایل‌های پشتیبان سنگین مناسب نیست. به‌همین
      علت توصیه می‌کنیم به‌عنوان جایگزین از ابزار{" "}
      <a href="#mysql-client">MySQL Command-Line Client</a> استفاده کنید.
    </Notice>

    <h4 id="mysql-client">MariaDB Command-Line Client</h4>
    <p>
      در صورتی که قصد داشته باشید فایل پشتیبان را از طریق خط فرمان سیستم‌عامل
      خود در دیتابیس‌های MySQL و MariaDB بازیابی کنید می‌توانید به‌شکل زیر از
      ابزار <span className="code">mariadb-client</span> استفاده کنید.
    </p>
    <Highlight className="bash">
      {`$ mariadb --host=DB_HOST --port=DB_PORT --user=DB_USER --password=DB_PASSWORD < DB_NAME.sql`}
    </Highlight>

    <Asciinema id="mariadb-restore" />

    <br />

    <Link href="/databases/mariadb/tips" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
