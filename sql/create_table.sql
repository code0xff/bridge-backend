-- xchain.xchain
CREATE TABLE `xchain` (
  `xchain_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `xchain_name` varchar(100) NOT NULL,
  `xchain_en_name` varchar(100) NOT NULL,
  `xchain_image` varchar(500) DEFAULT NULL,
  `xchain_detail` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_by` varchar(100) NOT NULL,
  `updated_by` varchar(100) NOT NULL,
  `xchain_id` varchar(100) NOT NULL,
  PRIMARY KEY (`xchain_seq`),
  KEY `xchain_created_at_IDX` (`created_at`) USING BTREE,
  KEY `xchain_updated_at_IDX` (`updated_at`) USING BTREE,
  KEY `xchain_xchain_name_IDX` (`xchain_name`) USING BTREE,
  KEY `xchain_xchain_en_name_IDX` (`xchain_en_name`) USING BTREE,
  KEY `xchain_xchain_id_IDX` (`xchain_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- xchain.xchain_eval
CREATE TABLE `xchain_eval` (
  `xchain_eval_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `dec_score` int(11) NOT NULL DEFAULT 0,
  `dec_detail` text DEFAULT NULL,
  `per_score` int(11) NOT NULL DEFAULT 0,
  `per_detail` text DEFAULT NULL,
  `sec_score` int(11) NOT NULL DEFAULT 0,
  `sec_detail` text DEFAULT NULL,
  `scal_score` int(11) NOT NULL DEFAULT 0,
  `scal_detail` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_by` varchar(100) NOT NULL,
  `updated_by` varchar(100) NOT NULL,
  `xchain_id` varchar(100) NOT NULL,
  `ref_detail` text DEFAULT NULL,
  PRIMARY KEY (`xchain_eval_seq`),
  KEY `xchain_eval_created_at_IDX` (`created_at`) USING BTREE,
  KEY `xchain_eval_updated_at_IDX` (`updated_at`) USING BTREE,
  KEY `xchain_eval_created_by_IDX` (`created_by`) USING BTREE,
  KEY `xchain_eval_updated_by_IDX` (`updated_by`) USING BTREE,
  KEY `xchain_eval_xchain_id_IDX` (`xchain_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- xchain.xchain_feedback
CREATE TABLE `xchain_feedback` (
   `xchain_feedback_seq` bigint(20) NOT NULL AUTO_INCREMENT,
   `fee_sum` int(11) NOT NULL DEFAULT 0,
   `time_sum` int(11) NOT NULL DEFAULT 0,
   `ui_sum` int(11) NOT NULL DEFAULT 0,
   `support_sum` int(11) NOT NULL DEFAULT 0,
   `xchain_id` varchar(100) NOT NULL,
   `feedback_count` int(11) NOT NULL DEFAULT 0,
   `created_at` datetime NOT NULL,
   `updated_at` datetime NOT NULL,
   `created_by` varchar(100) NOT NULL,
   `updated_by` varchar(100) NOT NULL,
   PRIMARY KEY (`xchain_feedback_seq`),
   KEY `xchain_feedback_xchain_id_IDX` (`xchain_id`) USING BTREE,
   KEY `xchain_feedback_created_at_IDX` (`created_at`) USING BTREE,
   KEY `xchain_feedback_updated_at_IDX` (`updated_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- xchain.xchain_feedback_detail
CREATE TABLE `xchain_feedback_detail` (
  `xchain_feedback_detail_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `fee_score` int(11) NOT NULL DEFAULT 0,
  `time_score` int(11) NOT NULL DEFAULT 0,
  `ui_score` int(11) NOT NULL DEFAULT 0,
  `support_score` int(11) NOT NULL DEFAULT 0,
  `xchain_id` varchar(100) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_by` varchar(100) NOT NULL,
  `updated_by` varchar(100) NOT NULL,
  `fee_detail` varchar(100) DEFAULT NULL,
  `time_detail` varchar(100) DEFAULT NULL,
  `ui_detail` varchar(100) DEFAULT NULL,
  `support_detail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`xchain_feedback_detail_seq`),
  KEY `xchain_feedback_detail_xchain_id_IDX` (`xchain_id`) USING BTREE,
  KEY `xchain_feedback_detail_user_address_IDX` (`user_address`) USING BTREE,
  KEY `xchain_feedback_detail_created_at_IDX` (`created_at`) USING BTREE,
  KEY `xchain_feedback_detail_updated_at_IDX` (`updated_at`) USING BTREE,
  KEY `xchain_feedback_detail_created_by_IDX` (`created_by`) USING BTREE,
  KEY `xchain_feedback_detail_updated_by_IDX` (`updated_by`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- xchain.xchain_admin
CREATE TABLE `xchain_admin` (
  `xchain_admin_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) NOT NULL,
  PRIMARY KEY (`xchain_admin_seq`),
  KEY `xchain_admin_address_IDX` (`address`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4