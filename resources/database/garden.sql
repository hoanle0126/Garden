-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 25, 2024 lúc 03:23 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+07:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `garden`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart_product`
--

CREATE TABLE `cart_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `thumbnail`) VALUES
(1, 'Feng Shui Bonsai', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427226/lrbfhairfg9acwqldarl.png'),
(2, 'Office Bonsai', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427245/sdmx01p3h7elvnzjjf3e.png'),
(3, 'Stone Lotus', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427415/br1epujg1jpwabg9nu5a.png'),
(4, 'Plants for the table', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427577/gxnqezv83uwekhbiwcm9.png'),
(5, 'Interior Plant', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427755/po6gsy918gbb5m0xsria.png'),
(6, 'Balcony Plant', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701427904/ryfkhmf5pymc5ll8kcd5.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `features`
--

CREATE TABLE `features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `common_name` varchar(255) DEFAULT NULL,
  `science_name` varchar(255) DEFAULT NULL,
  `plant_family` varchar(255) DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `source` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `features`
--

INSERT INTO `features` (`id`, `common_name`, `science_name`, `plant_family`, `product_id`, `source`) VALUES
(5, 'cây sen đá kim cương, cây kim cương sen đá, cây sen đá Pachyphytum Compactum, sen đá kim cương lá dài…', 'Pachyphytum Compactum', 'cây thuộc họ lá bỏng (Crassulaceae)', 8, 'chủ yếu có nguồn gốc tự nhiên ở Bắc bán cầu hoặc Nam Phi.'),
(6, 'Cây ngà voi, cây ngải ngà, cây nanh heo', 'Sanseviera canaliculata', 'Asparagaceae (họ Măng tây)', 15, 'Madagasca, quần đảo Reeunion và các nước thuộc châu Phi nhiệt đới'),
(7, 'cây Sen Đá Thơm, cây Sen Đá Lá Thơm, cây Vượng Tài, cây nhất mạc hương, nhất mạt hương, cây nhất mạc hương…', 'Plectranthus hadiensis var tomentosa', 'thuộc Crassualaceae (Thuốc bỏng)', 16, 'Cây có nguồn gốc xuất xứ từ Nam Phi, sau này được trồng phổ biến rộng khắp nhiều nơi trên thế giới. Nhất mạt hương là cây sen đá có hương thơm nhẹ nhàng, dễ chịu. Do có hình dáng bề ngoài khá là giống với cây Húng chanh nên nếu không nhìn kỹ sẽ có thể bị '),
(8, 'Cây Chuối Thiên Điểu Trắng Cao, Cây thiên điểu trắng, cây thiên điểu cao, cây chuối strelitzia, cây chuối Nicolai, cây chuối trắng, cây thiên điểu trong nhà, cây chuối châu Phi…', 'Strelitzia Nicolai', 'thuộc chi Thiên điểu họ Chuối rẻ quạt', 14, 'nguồn gốc từ Nam Phi'),
(9, 'Cây cúc mốc, Nguyệt bạch, Ngải phù dung, Ngọc phù dung…', 'Crossostephium chinense (A. Gray ex L.) Mak', 'Cúc (Asteraceae).', 23, 'Nhiều tài liệu ghi chép cây cúc mốc có nguồn gốc ở Đài Loan. Hiện tại, loài cây này phân bố nhiều nơi như Malaysia, Lào, Việt Nam… Ở nước ta, cây thường được trồng làm cảnh hoặc thu hái lá quanh năm.'),
(10, 'Cây phát tài búp sen, cây búp sen, cây phát tài bông súng,…', 'Dracaena deremensis', 'Cây thuộc họ tóc tiên (Ruscaceae)', 24, 'từ các nước châu Á.'),
(11, 'Cây bàng Singapore', 'Ficus Lyrata', 'Dâu tằm (Moaraceae)', 25, 'cây có nguồn gốc từ Châu Âu, nhưng loài cây này đã sinh sống khá lâu tại Singapore. Vì thế nên khi đưa về Việt Nam, cây thích nghi khá nhanh với điều kiện khí hậu nóng ẩm nước ta.'),
(12, NULL, NULL, NULL, 26, NULL),
(13, NULL, NULL, NULL, 27, NULL),
(14, NULL, NULL, NULL, 28, NULL),
(16, 'Cây Tùng thơm', 'Cupressus macrocarpa , Goldcrest', 'Tùng, Trắc thuộc lá kim', 30, 'Nam châu Mỹ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `src` longtext NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `images`
--

INSERT INTO `images` (`id`, `src`, `product_id`) VALUES
(95, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701596895/fvcikjl4vdcod3ebbdpt.jpg', 14),
(96, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701596905/iqq3nwrlbjsen8vnzmbt.jpg', 14),
(97, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701596916/kdk2g5paqtarmacjfd76.jpg', 14),
(98, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701596920/bbpvv8qwzfwes8i2za4c.jpg', 14),
(99, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701596924/kpprzzgzzpyvf6el7q6p.jpg', 14),
(111, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598217/nzxkr9s4cndokdtkwkci.jpg', 16),
(112, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598221/u52o6vmgezvquopbgqol.jpg', 16),
(113, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598226/gfqi8bdqbylcsv6dsjdx.jpg', 16),
(114, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598231/hzezbulcl3zeavbv8ixw.jpg', 16),
(115, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598234/lasxeafmrqgcdpugujyu.jpg', 16),
(116, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598238/nq7vklioofpkbocg9joq.jpg', 16),
(130, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598491/bcyzgfwcr3idtgxejymb.jpg', 18),
(131, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598494/voobejmv3dun2wcgnb10.jpg', 18),
(132, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598498/n6tlnqw1eew2xy2ky8u0.jpg', 18),
(133, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598502/bre6xybpg2p9hjakeh9g.png', 18),
(134, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598505/wgro40ytx5z0j9jut90q.jpg', 18),
(140, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701597927/udpwqffpxlggkhjdnpld.jpg', 15),
(141, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701597932/hn2cfhrsdiui4q0whwdg.jpg', 15),
(142, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701597936/yphsijulmx5fze6fgdox.jpg', 15),
(143, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701597942/j4gk8rqxlvhp9v867lem.jpg', 15),
(144, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701597946/etdmbmagljpguyjjtrc5.jpg', 15),
(147, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701705576/q2kbnttxensxkf1dnjqx.jpg', 23),
(148, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701705584/ozrsit5ib97znvddtgdw.jpg', 23),
(149, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701705589/p9hiefhlmjie1yot6zp5.jpg', 23),
(150, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701705593/iewbyypyewk8awkpdzsm.jpg', 23),
(151, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701705597/by7tih9oloj9ilkrgsjm.jpg', 23),
(152, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706016/rqmx63ykimfjbx25ikjj.jpg', 24),
(153, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706020/yjzdqi8udlpzle68qcla.jpg', 24),
(154, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706029/cwdw5fu1a3pzcwarwwes.png', 24),
(155, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706034/l2xnwa8twgrb3baqveif.jpg', 24),
(156, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706038/dtrhqwyhvvejr20gtu6g.jpg', 24),
(157, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706041/xen6q0lxtxm75arkir5i.jpg', 24),
(158, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706361/wim7kxtwvm8oygthbgeu.jpg', 25),
(159, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706366/kfibvwtp0xiictlwfvbw.jpg', 25),
(160, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706370/kfiij4al3y4j0ndpcfoc.jpg', 25),
(161, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706373/mnsg7s6ia6lcgs6rhmw0.jpg', 25),
(162, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706377/uxpnhljq8lfy3iweh2l4.jpg', 25),
(163, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706686/aw2lxggawadv62dszvtb.webp', 26),
(164, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706692/uttyjbexfolwob5kyx9z.jpg', 26),
(165, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706698/dynz4bhme1jaat35igre.jpg', 26),
(166, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706702/wqj17biig5otwioap527.jpg', 26),
(167, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706705/hnskc1kp92pr1vaugwl3.webp', 26),
(168, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706712/gxvokbqsbucqg72wa5ib.jpg', 26),
(169, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706716/mfny92ebe9c3w7vhybro.jpg', 26),
(170, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701708695/fpcomyhscw4c5fxisfpa.jpg', 27),
(171, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701708702/zmg442d36ukiud249qdb.jpg', 27),
(172, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701708705/i7tpwxxenbowygorfxd4.jpg', 27),
(173, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701708707/b0q8g1rphoqjhpnz3sjy.jpg', 27),
(174, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701708710/exg63xzgum3z3ckhlvnp.jpg', 27),
(175, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709045/nqkh8kpxyqxvkrwrnypd.jpg', 28),
(176, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709050/uuhirc31t7fh3f8y43d1.jpg', 28),
(177, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709055/x0ttinswvs5uiofirbas.jpg', 28),
(178, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709059/yan4ipusj2ygefwjel6w.jpg', 28),
(179, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709063/pdjkpisjozclhrntktye.jpg', 28),
(180, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709380/o6co5ebmx1raneuwmjj4.jpg', 30),
(181, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709385/ewxzgw8qjpftyi4abczq.jpg', 30),
(182, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709389/pl5iymjpn3hgkwtyvcph.jpg', 30),
(183, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709393/pllly3jbjxrgemrcxdje.jpg', 30),
(184, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709397/h70vaiaghwwmknibib77.jpg', 30),
(195, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701594158/gbilbzf7wrn2z00xjypd.jpg', 13),
(196, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701594160/f4b5rzkqc31iu1sbkbdl.jpg', 13),
(197, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701594164/gwm9tbe492crfcf2a8sz.jpg', 13),
(198, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701594168/w5lssovqgbfylfll8yup.jpg', 13),
(199, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701594173/h9xfnyawoipshzbrg8jp.jpg', 13),
(205, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701595842/cs3arn86agzymufvhldk.jpg', 8),
(206, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701595846/caiv2xg68blct8zzbjdj.jpg', 8),
(207, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701595851/yukjgbb5pc5qovqm3407.jpg', 8),
(208, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701595862/vmyy2aqyu35hofmvdctn.jpg', 8),
(209, 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701595868/xdhl9oeykdnwd6ww4tgd.jpg', 8);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_07_13_083322_create_categories_table', 1),
(5, '2024_07_13_083323_create_products_table', 1),
(6, '2024_07_19_032147_create_images_table', 1),
(7, '2024_07_19_080955_create_orders_table', 1),
(8, '2024_07_19_081235_create_carts_table', 1),
(9, '2024_07_19_081250_create_stocks_table', 1),
(10, '2024_07_19_081259_create_prices_table', 1),
(11, '2024_07_19_081314_create_features_table', 1),
(12, '2024_07_19_083902_create_reviews_table', 1),
(13, '2024_07_21_105018_create_revenues_table', 1),
(14, '2024_07_21_113609_add_two_factor_columns_to_users_table', 1),
(15, '2024_07_21_135917_create_permission_tables', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL,
  `total_price` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `prices`
--

CREATE TABLE `prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `base_price` varchar(255) NOT NULL DEFAULT '0',
  `sales` varchar(255) NOT NULL DEFAULT '0',
  `product_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `prices`
--

INSERT INTO `prices` (`id`, `base_price`, `sales`, `product_id`) VALUES
(5, '5', '30', 8),
(6, '7', '10', 13),
(7, '12', '2', 14),
(8, '10', '2', 15),
(9, '5.3', '0', 16),
(10, '10.2', '0', 18),
(11, '10', '12', 23),
(12, '13', '0', 24),
(13, '25', '0', 25),
(14, '25', '0', 26),
(15, '10', '0', 27),
(16, '31', '0', 28),
(18, '7', '0', 30);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `avg_rating` varchar(255) DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `thumbnail`, `avg_rating`, `category_id`, `created_at`, `updated_at`) VALUES
(8, 'Cây Sen Đá Kim Cương', 'Cây sen đá kim cương là một trong những loại sen đá nhận được sự yêu thích của nhiều người, loại sen đá này mang vẻ đẹp mong manh nhưng không kém phần quyến rũ tựa như những viên kim cương rực rỡ thường được sử dụng để trang trí trong khá nhiều trong tiểu', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701593030/b0vpdpm6l59g2ivxs7xd.jpg', '2', 3, '2023-11-23 15:23:05', '2024-01-01 14:44:23'),
(13, 'Cây bách thủy tiên', 'Cây bách thủy tiên thuộc giống cây thủy sinh mang ý nghĩa phong thủy tốt nên không những được nhiều người ưa chuộng và lựa chọn trồng nhiều mà còn trở thành một món quà tặng đầy tinh tế dành tặng người thân, bạn bè,…', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701574924/muvdvd7jee3zxsa6jen3.jpg', '0', 2, '2023-11-29 09:26:40', '2024-01-01 14:44:31'),
(14, 'Cây Chuối Thiên Điểu Trắng Cao', 'Cây Chuối Thiên Điểu Trắng Cao là loài cây cảnh nội thất mới được du nhập vào Việt Nam vào thời gian gần đây. Chúng thường được trồng trong chậu trang trí sân vườn, giếng trời, trang trí nội thất nhà ở, văn phòng làm việc quán cà phê…  mang lại cảm giác t', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701575422/l9z5vnd3pngwurfmzpc9.jpg', '0', 6, '2023-11-29 09:27:49', '2024-01-01 14:45:32'),
(15, 'Cây Ngà Voi', 'Cây ngà voi là loại cây cảnh có ngoại hình độc đáo với lá biến dạng rất thích hợp để trang trí không gian nội ngoại thất từ phòng khách, phòng ngủ, bàn làm việc hay quán cà phê, đến văn phòng công ty đều được. Ngoài ra, cây còn dùng để chữa bệnh cũng rất', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701597803/ztctjpkzto7dygochdfe.jpg', '0', 5, '2023-11-29 09:31:03', '2024-01-01 14:44:40'),
(16, 'Cây Nhất Mạt Hương', 'Cây nhất mạt hương là loại cây cảnh nhỏ nhắn được nhiều người yêu thích trồng và trang trí thêm cho không gian. Loại cây này không chỉ có nhiều tác dụng hữu ích mà còn mang ý nghĩa biểu tượng cho sự may mắn, tài lộc.', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598211/paxj949bknu3k2afm50p.jpg', '0', 1, '2023-11-29 09:50:09', '2023-12-03 10:10:40'),
(18, 'Cây Hoa Mai Xanh Thái Lan', 'Cây hoa mai xanh Thái Lan là loài cây dây leo thường được trồng ở trước cổng, hiên nhà, hoặc làm giàn giúp che nắng và trang trí ngôi nhà rất ấn tượng và bắt mắt. Hơn nứa hoa mai xanh thái còn là biểu tượng của sự hạnh phúc, giàu sang phú quý, trồng cây t', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701598483/dzhikw1oeyrt5rixyqh5.png', '0', 1, '2023-12-03 08:27:50', '2023-12-03 10:15:07'),
(23, 'Cây Cúc Mốc', 'Cây Cúc Mốc là loại cây mang vẻ đẹp bình dị nhưng độc đáo rất phổ biến tại Việt Nam, chúng vừa cổ kính nhưng lại vừa phong trần lại có nhiều tạo hình bắt mắt. Bên cạnh đó cúc mốc cũng là loài cây mang đến nhiều ý nghĩa phong thủy tốt đẹp và còn là thảo dư', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701705569/sbi6hmsfxdagxcvc6izh.jpg', '0', 1, '2023-12-04 15:57:14', '2023-12-04 16:00:02'),
(24, 'Cây Phát Tài Búp Sen', 'Cây phát tài búp sen là loài cây cảnh phong thủy được biết đến sẽ mang lại may mắn, tiền tài cho gia chủ. Hơn nữa loài cây này còn có ngoại hình nhỏ nhắn dễ thương thường được trồng làm cây trang trí đẹp cho không gian sống. Phát tài búp sen có sức sống m', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706009/pmvftaqfktsxxgne8iah.jpg', '0', 1, '2023-12-04 16:04:54', '2023-12-04 16:07:23'),
(25, 'Cây Bàng Singapore', 'Cây bàng Singapore là loài cây phóng thủy sở hữu bộ lá đẹp, loài cây này thường được sử dụng để làm cây để bàn, cây để sàn để trang trí nội thất,… Cây Bàng Singapore không chỉ mang đến cho không gian cuộc sống xanh mát, mang còn giúp gia chủ có vận khí tố', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706350/vhewgglllrwuc5punhsb.jpg', '0', 1, '2023-12-04 16:10:15', '2023-12-04 16:12:59'),
(26, 'Cây Trầu Bà Nam Mỹ Lá Xẻ', 'Cây trầu bà Nam Mỹ lá xẻ có xuất xứ từ Châu Mỹ. Nên rất thích hợp để trồng với khí hậu nước ta. Đặc biệt cây ít khi mắc phải sâu bệnh nên việc chăm sóc cũng đơn giản.', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701706721/pwmijndyytpyfespp5ov.jpg', '0', 1, '2023-12-04 16:15:44', '2023-12-04 16:18:45'),
(27, 'Cây phong lộc hoa', 'Cây phong lộc hoa là cây thuộc họ nhà dứa. Cây cũng có các tên gọi khác như: cây dá cảnh nến đỏ, cây dứa cảnh lệ, cây dứa cánh sen, cây ngôi sao đỏ, cây ngọn lửa đỏ, cây phong lộc hoa, cây đuốc đỏ. Vì khi nhìn theo chiều nghiêng thì cây giống hình nến. Cò', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701708688/btufhhtlef1xtfstlfwi.jpg', '0', 1, '2023-12-04 16:49:57', '2023-12-04 16:51:59'),
(28, 'Cây Thần Tài', 'Cây thần tài  hay còn gọi là trúc phát tài, chỉ cần nghe tên thôi cũng đủ hiểu cây có ý nghĩa về mặt phong thủy. Hiện nay, cây thần tài được nhiều người lựa chọn để trưng bày trang trí trong nhà, cửa hàng, văn phòng… Cây không những đem lại vẻ đẹp mà còn ', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709037/m2hvuwggafmd68erqzfq.jpg', '0', 1, '2023-12-04 16:54:33', '2023-12-04 16:57:45'),
(30, 'Cây Tùng Thơm', 'Cây tùng thơm là loại cây cảnh quen thuộc có hình dáng bắt mắt thu hút ánh nhìn với màu xanh non của lá cùng mùi hương rất dễ chịu. Cây ngoài khả ngăn trang trí nội thất còn giúp thanh lọc không khí, đuổi muỗi, côn trùng,…', 'http://res.cloudinary.com/dbszvxbvv/image/upload/v1701709372/tbllhwpxpnpv04g1viex.jpg', '0', 1, '2023-12-04 17:00:29', '2023-12-04 17:03:18');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `revenues`
--

CREATE TABLE `revenues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `revenue` double NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('LcD8M0jQh4AsJP3slIiGo2JiHCXIRRZJren4aV8Y', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidnNVblU1eVJxTlFUd09OTFRDQXExeHhhaUU5SHRZZmNGd3RzYktwTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZG1pbi9wcm9kdWN0cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721891266),
('snVFENwXEGre6JFMJbzDQTnveIuULzUNPWl9yQjI', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaHlRS0pHV2xoVW4zazlBOGxPZHJuZEFSejd4TVhORlRUQ2doOGhpRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZG1pbi9wcm9kdWN0cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1721912040);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `stocks`
--

CREATE TABLE `stocks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `stocks`
--

INSERT INTO `stocks` (`id`, `product_id`, `status`, `quantity`) VALUES
(1, 8, 'On Stock', 12),
(2, 13, 'On Stock', 88),
(3, 14, 'On Stock', 98),
(4, 15, 'On Stock', 100),
(5, 16, 'On Stock', 99),
(6, 18, 'On Stock', 99),
(7, 23, 'On Stock', 80),
(8, 24, 'On Stock', 100),
(9, 25, 'On Stock', 99),
(10, 26, 'On Stock', 100),
(11, 27, 'On Stock', 100),
(12, 28, 'On Stock', 100),
(13, 30, 'On Stock', 100);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Chỉ mục cho bảng `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Chỉ mục cho bảng `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `cart_product`
--
ALTER TABLE `cart_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_product_cart_id_foreign` (`cart_id`),
  ADD KEY `cart_product_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`),
  ADD KEY `features_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Chỉ mục cho bảng `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Chỉ mục cho bảng `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Chỉ mục cho bảng `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Chỉ mục cho bảng `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prices_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Chỉ mục cho bảng `revenues`
--
ALTER TABLE `revenues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `revenues_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`),
  ADD KEY `reviews_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Chỉ mục cho bảng `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Chỉ mục cho bảng `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Chỉ mục cho bảng `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stocks_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `cart_product`
--
ALTER TABLE `cart_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `features`
--
ALTER TABLE `features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=210;

--
-- AUTO_INCREMENT cho bảng `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `prices`
--
ALTER TABLE `prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `revenues`
--
ALTER TABLE `revenues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `cart_product`
--
ALTER TABLE `cart_product`
  ADD CONSTRAINT `cart_product_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_product_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `features`
--
ALTER TABLE `features`
  ADD CONSTRAINT `features_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `prices`
--
ALTER TABLE `prices`
  ADD CONSTRAINT `prices_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `revenues`
--
ALTER TABLE `revenues`
  ADD CONSTRAINT `revenues_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `stocks_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
