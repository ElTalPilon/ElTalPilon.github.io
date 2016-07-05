<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ab38740_wrdp1');

/** MySQL database username */
define('DB_USER', 'ab38740_wrdp1');

/** MySQL database password */
define('DB_PASSWORD', 'RmkM0bd6Vfj6wDI6');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ',:NVA^[OoW<Q)(qB(N(Q>1RW2M+_hnv|T/ ]>C!1134V;jb@K(;+cp,?iEg$a`u>');
define('SECURE_AUTH_KEY',  '&c5d##.O-VKEbwXKH$TNJ6tIQ}O-hFl?VohUm<rB6h WrJV?,:v(l|K.2dz$dPvy');
define('LOGGED_IN_KEY',    '=zqxCL-?7RKFK1={]/|BE{G8)b*#n@k#b(qO>4|>AZg M4GVkW_F]/;;9/jyEZ^L');
define('NONCE_KEY',        ';_Ig<l.HZ|-,f-Ej|TN$dt$Z&Zaaa)x7;Ma7,IiO.vlnp4B =BQMfhZJJ`#dJhy ');
define('AUTH_SALT',        'k!x4{qNM_%tr&Y[`O`I+M??|?nA*[Mi|Dkmoy:dn+h~tW;V%WQ9WMVfUD#q4`VDa');
define('SECURE_AUTH_SALT', 'zJRT%*KKn$-<C:8Q^ ]>liRGHx:r/M~*S9jRjPe|A2p=QV[b3|iw&xDj>u*vwz^m');
define('LOGGED_IN_SALT',   '@?@PlR]qX*I. -Y,Wdu,sHA6B)1SoCG3nXWz3ywQ,I1  /MK|XBY}aN);bW@/{fq');
define('NONCE_SALT',       'e]|o!M@/j)>B5OJiBy)Njl0=so.L3REkBQl;.I ]x3=K<{$|Lw,%)nK0:LO&v+9/');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'boulder_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
