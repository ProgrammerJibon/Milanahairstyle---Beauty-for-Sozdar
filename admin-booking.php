<?php 
$sql = "SELECT * FROM `booking` ORDER BY `booking`.`book_date` DESC";
$sql = mysqli_query($connect, $sql);
?>
<table>
	<thead>
		<tr>
			<th>Posted on</th>
			<th>Coming Date & time</th>
			<th>Name</th>
			<th>Phone</th>
			<th>Email</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<?php
foreach ($sql as $key) {
	?>	<tr>

			<td>
				<?php echo date('H:i:sA', $key['time']); ?>
				<br>
				<?php echo date('d M, Y', $key['time']); ?>
			</td>
			<td>
                <?php echo $key['book_time']; ?>
                <br>
                <?php echo $key['book_date']; ?>
            </td>
			<td>
                <?php echo $key['book_name']; ?>
            </td>
			<td style="user-select: all; cursor: pointer;" onclick="tab('tel:<?php echo $key['book_phone']; ?>');">
                <?php echo $key['book_phone']; ?>
            </td>
			<td style="user-select: all; cursor: pointer;" onclick="tab('mailto:<?php echo $key['book_email']; ?>');">
                <?php echo $key['book_email']; ?>
            </td>
			<td style="width: 150px">
				<form action="/json.php" method="POST">
					<button onclick="if(!confirm('Are your sure to delete?')){return false;}" style="width: 100%;" name="delete_books" value="<?php echo $key['id']; ?>">Delete</button>
				</form>
				<button style="cursor: pointer; color: red; font-size: 11px;width: 100%;" onclick="alert('User Agent: <?php echo $key['user-agent']; ?>\nIP: <?php echo $key['ip']; ?>')">User Agent & IP</button>
			</td>
		</tr><?php
}?>
	</tbody>
</table>
	