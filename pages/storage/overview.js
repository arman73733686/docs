import Link from 'next/link'
import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>Liara | سرویس ذخیره‌ی فایل - Object Storage</title>
    </Head>

    <h1>سرویس ذخیره‌ی فایل (Object Storage)</h1>
    <p>
      لیارا یک فایل‌سیستم
      (file system)
      زودگذر در اختیار هر پروژه‌ای قرار می‌دهد.
      داده‌هایی که شما در پوشه‌های پروژه‌ی‌تان ذخیره می‌کنید ممکن است بعد از هر بار
      {' '}
      خاموش و روشن شدن سرویس‌تان از بین بروند.
      (<Link href="/projects/volumes">به جز volume ها</Link>)
      <br />
      اکثر سیستم‌هایی که بر مبنای
      container
      ها هستند، مانند
      Docker،
      به همین شیوه عمل می‌کنند.
    </p>
    <p>
      برای نگهداری از داده‌ی پویا می‌توانید از یکی از انواع دیتابیس‌هایی که لیارا در اختیارتان قرار می‌دهد،
      مانند
      MySQL
      و یا
      MongoDB
      استفاده کنید.
      برای نگهداری از داده‌های ثابت و
      static
      می‌توانید از سرویس ذخیره‌ی فایل لیارا استفاده کنید.
    </p>
    <p>
      این سرویس در دنیا با عنوان
      Object Storage
      شناخته شده‌است و به شما این امکان را می‌دهد که تصاویر، ویدیوها، موسیقی‌ها و... را در بستر ابری و نامحدود ذخیره کنید.
    </p>
    <p>
      سرویس فایل لیارا با سرویس AWS S3 سازگار است. یعنی می‌توانید از کتاب‌خانه‌ها و ابزارهایی که
      برای سرویس AWS S3 نوشته شده‌اند، برای ارتباط با لیارا استفاده کنید.
    </p>

    <h3>فعال‌کردن سرویس</h3>
    <p>
      از فهرست بالای صفحه روی «سرویس فایل» کلیک کنید.
    </p>
    <ZoomableImage src="/static/storage-activate.png" alt="فعال‌سازی سرویس فایل" />
    <p>
      در این صفحه، می‌توانید میزان حجم مورد نیاز خود را با کلیک روی دکمه‌های + و - تعیین کنید. 
      سپس روی «فعال کردن سرویس فایل» کلیک کنید.
    </p>

    <h3>داشبورد مدیریت فایل</h3>
    <p>
      بعد از فعال‌کردن سرویس فایل، وارد صفحه‌ای مانند صفحه‌ی زیر خواهید شد:
    </p>
    <ZoomableImage src="/static/storage-details.png" alt="اطلاعات سرویس فایل" />
    <p>
      با کلیک بر روی گزینه‌ی «باز کردن داشبورد سرویس فایل» وارد داشبورد مدیریت فایل لیارا خواهید شد.
      برای ورود به داشبورد، باید
      <span className="code">access key</span>
      و
      <span className="code">secret key</span>
      را وارد کنید.
    </p>

    <h3>آپلود، دانلود و مشاهده‌ی فایل‌ها</h3>
    <p>
      علاوه‌بر این که می‌توانید از داشبورد سرویس فایل استفاده کنید، با استفاده از کتاب‌خانه‌های
      AWS S3
      نیاز می‌توانید این کار را انجام دهید.
      لیارا نیز به صورت رسمی،
      <span className="code">SDK</span>
      هایی را برای زبان‌های مختلف توسعه می‌دهد که می‌توانید با استفاده از آن‌ها، فایل‌های‌تان را مدیریت کنید.
    </p>
    <ul class="list-more-space">
      <li><a href="/storage/nodejs">راهنمای سرویس فایل برای NodeJS</a></li>
      <li><a href="/storage/laravel">راهنمای سرویس فایل برای Laravel</a></li>
    </ul>
  </Layout>
)