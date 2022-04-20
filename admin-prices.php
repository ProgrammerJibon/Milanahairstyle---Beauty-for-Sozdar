<?php 
$sql = mysqli_query($connect, "SELECT * FROM `prices_list` ORDER BY `id` DESC");
?>
<form method="POST" action="/json.php" class="settings_main">
    <div class="settings_item">
		<div class="settings_title">
			Add pricing:
		</div>
		<div>
			<input type="text" name="name" required placeholder="Name" class="change_text" value="">
			<input type="number" name="price" required step="0.01" placeholder="Price" class="change_text" value="">
			<select type="text" name="sex"  class="change_text">
                <option value="men" selected disabled>Sex</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
            </select>
			<button type="submit" name="add_pricing" class="change_text" value="">Add</button>
		</div>
	</div>
</form>
<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Price</th>
			<th>gender</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<?php
foreach ($sql as $key) {
	?>	<tr>
			<td style="user-select: all"><?php echo $key['name']; ?></td>
			<td><?php echo $key['price']; ?>&euro;</td>
			<td><?php echo $key['gender']; ?></td>
			<td style="display: flex;align-items: center;justify-content: center; padding: 0;">
				<form action="/json.php" method="POST">
					<button style="width: 100px;" name="delete_pricing" value="<?php echo $key['id']; ?>">Delete</button>
				</form>
			</td>
		</tr><?php
}?>
	</tbody>
</table>