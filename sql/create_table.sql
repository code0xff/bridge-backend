-- xchain.xchain
CREATE TABLE `xchain`.`xchain` (
  `xchain_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `xchain_name` varchar(100) NOT NULL,
  `xchain_en_name` varchar(100) NOT NULL,
  `xchain_image` varchar(500) DEFAULT NULL,
  `xchain_detail` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_by` varchar(100) NOT NULL,
  `updated_by` varchar(100) NOT NULL,
  PRIMARY KEY (`xchain_id`),
  KEY `xchain_created_at_IDX` (`created_at`) USING BTREE,
  KEY `xchain_updated_at_IDX` (`updated_at`) USING BTREE,
  KEY `xchain_xchain_name_IDX` (`xchain_name`) USING BTREE,
  KEY `xchain_xchain_en_name_IDX` (`xchain_en_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- xchain.xchain_eval
CREATE TABLE `xchain`.`xchain_eval` (
    `xchain_eval_id` bigint(20) NOT NULL AUTO_INCREMENT,
    `xchain_id` bigint(20) NOT NULL,
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
    PRIMARY KEY (`xchain_eval_id`),
    KEY `xchain_eval_created_at_IDX` (`created_at`) USING BTREE,
    KEY `xchain_eval_updated_at_IDX` (`updated_at`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;